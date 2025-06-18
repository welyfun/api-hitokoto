// 将所有JSON数据整合到一个文件中
// 您需要将sentences文件夹中的所有JSON文件内容复制到这里

const sentencesData = [
  {
    "id": 5558,
    "uuid": "5b12ff5f-198c-41cf-b700-615b98ae81ac",
    "hitokoto": "众里寻他千百度。蓦然回首，那人却在，灯火阑珊处。",
    "type": "i",
    "from": "青玉案·元夕",
    "from_who": "辛弃疾",
    "creator": "a632079",
    "creator_uid": 1044,
    "reviewer": 1044,
    "commit_from": "api",
    "created_at": "1586266397",
    "length": 24
  }
];

export function getSentencesData() {
  return sentencesData;
}