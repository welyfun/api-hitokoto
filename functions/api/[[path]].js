// 导入句子数据
import { getSentencesData } from '../../data/sentences.js';

export async function onRequestGet(context) {
  try {
    // 获取所有句子数据
    const allSentences = getSentencesData();
    
    if (allSentences.length === 0) {
      return new Response(JSON.stringify({
        error: '无法获取句子数据',
        message: '数据文件为空或格式错误'
      }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      });
    }
    
    // 随机选择一条句子
    const randomIndex = Math.floor(Math.random() * allSentences.length);
    const randomSentence = allSentences[randomIndex];
    
    return new Response(JSON.stringify(randomSentence), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    });
    
  } catch (error) {
    return new Response(JSON.stringify({
      error: 'API错误',
      message: error.message
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}

// 处理OPTIONS请求（CORS预检）
export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}