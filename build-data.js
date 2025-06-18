import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 获取当前文件的目录路径（ES模块中的__dirname替代）
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 读取sentences文件夹中的所有JSON文件并合并
function buildSentencesData() {
  const sentencesDir = path.join(__dirname, 'sentences');
  const allSentences = [];
  
  console.log('开始构建数据文件...');
  console.log('sentences目录:', sentencesDir);
  
  if (!fs.existsSync(sentencesDir)) {
    console.error('sentences文件夹不存在');
    process.exit(1);
  }
  
  const files = fs.readdirSync(sentencesDir);
  const jsonFiles = files.filter(file => file.endsWith('.json'));
  
  console.log('找到JSON文件:', jsonFiles);
  
  jsonFiles.forEach(file => {
    try {
      const filePath = path.join(sentencesDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const sentences = JSON.parse(fileContent);
      
      if (Array.isArray(sentences)) {
        allSentences.push(...sentences);
        console.log(`从 ${file} 加载了 ${sentences.length} 条数据`);
      }
    } catch (error) {
      console.error(`读取文件 ${file} 时出错:`, error.message);
    }
  });
  
  // 生成sentences.js文件
  const outputContent = `// 自动生成的句子数据文件
// 生成时间: ${new Date().toISOString()}
// 数据条数: ${allSentences.length}

const sentencesData = ${JSON.stringify(allSentences, null, 2)};

export function getSentencesData() {
  return sentencesData;
}

export default sentencesData;
`;
  
  const dataDir = path.join(__dirname, 'data');
  const outputPath = path.join(dataDir, 'sentences.js');
  
  // 确保data文件夹存在
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
    console.log('创建data文件夹');
  }
  
  fs.writeFileSync(outputPath, outputContent);
  console.log(`✅ 成功生成 data/sentences.js，包含 ${allSentences.length} 条数据`);
}

buildSentencesData();