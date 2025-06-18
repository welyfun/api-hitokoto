// 将所有JSON数据整合到一个文件中
// 您需要将sentences文件夹中的所有JSON文件内容复制到这里

const sentencesData = [
  // a.json 的数据
  {
    "id": 275,
    "uuid": "2f2ec8e2-ac77-45a0-a0f6-b62cf124b493",
    "hitokoto": "如果不能忠于自己的心，胜负又有什么价值呢？",
    "type": "b",
    "from": "塔希里亚故事集",
    "from_who": null,
    "creator": "魅影陌客",
    "creator_uid": 0,
    "reviewer": 0,
    "commit_from": "web",
    "created_at": "1468949091",
    "length": 21
  },
  {
    "id": 276,
    "uuid": "c1507f83-9422-448a-87d2-7c6a50203eca",
    "hitokoto": "在茫茫人海中，同样是高中生，同乘7点50分的电车，看着同一片海……那个瞬间不就是如奇迹般的邂逅吗。",
    "type": "b",
    "from": "单恋电车",
    "from_who": null,
    "creator": "冥酱",
    "creator_uid": 0,
    "reviewer": 0,
    "commit_from": "web",
    "created_at": "1468949092",
    "length": 49
  }
  // ... 添加更多数据
];

export function getSentencesData() {
  return sentencesData;
}