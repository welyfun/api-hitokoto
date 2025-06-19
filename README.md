# 一言API - Cloudflare Pages版

![GitHub stars](https://img.shields.io/github/stars/welyfun/api-hitokoto?style=flat-square)
![GitHub forks](https://img.shields.io/github/forks/welyfun/api-hitokoto?style=flat-square)
![GitHub license](https://img.shields.io/github/license/welyfun/api-hitokoto?style=flat-square)

一个基于 Cloudflare Pages 部署的一言API接口，提供随机的动漫、文学、影视等句子。

## ✨ 特性

- 🚀 **零成本部署** - 基于 Cloudflare Pages，完全免费
- 🌍 **全球加速** - Cloudflare CDN 全球节点加速
- 🔒 **自动HTTPS** - 自动提供SSL证书
- 📱 **CORS支持** - 支持跨域请求，可被前端直接调用
- 🤖 **自动更新** - GitHub Actions 每日自动更新句子库
- ⚡ **极速响应** - 边缘计算，毫秒级响应时间
- 🎯 **简单调用** - RESTful API，一个GET请求即可获取

## 🎬 在线演示

- [API地址](https://api-hitokoto.wely.fun/api)：`https://api-hitokoto.wely.fun/api`
- [演示页面](https://api-hitokoto.wely.fun)：`https://api-hitokoto.wely.fun`

## 📋 API 使用

### 基本调用
```bash
curl https://api-hitokoto.wely.fun/api
```

### 响应示例
与官方 API 返回信息格式完全相同。
```json
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
```

### 字段说明
- `id`: 一言标识
- `uuid`: 一言唯一标识，可以链接到 https://hitokoto.cn?uuid=[uuid] 查看这个一言的完整信息
- `hitokoto`: 一言正文，编码方式 unicode，使用 utf-8
- `type`: 类型
- `from`: 一言的出处
- `from_who`: 一言的作者
- `creator`: 添加者
- `creator_uid`: 添加者用户标识
- `reviewer`: 审核员标识
- `commit_from`: 提交方式
- `created_at`: 添加时间
- `length`: 句子长度

## 🚀 快速部署

1. **Fork 本仓库**
   - 点击右上角 Fork 按钮

2. **连接 Cloudflare Pages**
   - 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - 进入 `Pages` 页面
   - 点击 `创建项目` → `连接到 Git`
   - 选择你 Fork 的仓库
   - 配置构建设置：
     - **构建命令**: `npm run build`
     - **输出目录**: `/`
   - 点击 `保存并部署`

3. **启用自动更新句子库**（可选）
   - 进入你 Fork 的仓库
   - 点击 `Actions` 标签页
   - 点击 `I understand my workflows, enable them`
   - 选择 `Sync Sentences from sentences-bundle`
   - 点击 `Enable workflow`
   - GitHub Actions 将在每日凌晨3点自动更新句子库

4. **绑定自定义域名**（可选）
   - 在 Cloudflare Pages 项目设置中
   - 添加自定义域名
   - 配置 DNS 记录

## 📁 项目结构

```
├── .github/
│   └── workflows/
│       └── sync-sentences.yml   # 自动更新工作流
├── data/
│   └── sentences.js             # 构建后的句子文件
├── functions/
│   └── api/
│       └── [[path]].js          # API 主要逻辑
├── sentences/                   # 原始句子数据
│   ├── a.json                   # 动画类句子
│   ├── b.json                   # 漫画类句子
│   ├── c.json                   # 游戏类句子
│   └── ...                      # 其他分类
├── _headers                     # 防止收录 pages.dev 
├── build-data.js                # 数据构建脚本
├── index.html                   # 演示页面
├── LICENSE                      # AGPL 协议
├── package.json                 # 项目配置
├── README.md                    # 项目说明
└── robots.txt                   # 反爬君子协议
```

## 🔧 本地开发

1. **安装依赖**
   ```bash
   npm install
   ```

2. **构建数据文件**
   ```bash
   npm run build
   ```

3. **本地测试**
   ```bash
   # 使用 wrangler 本地调试（需要安装 wrangler）
   npx wrangler pages dev .
   ```

## 🤖 自动更新说明

本项目包含 GitHub Actions 工作流，可以：

- 📅 **每日凌晨3点**自动运行
- 🔄 **自动拉取**最新的句子数据
- 📝 **自动提交**更新到仓库
- 🚀 **触发重新部署**

**⚠️ 重要提醒**：Fork 仓库后，GitHub Actions 默认是禁用的，需要手动启用：

1. 进入你 Fork 的仓库
2. 点击 `Actions` 标签页
3. 点击 `I understand my workflows, enable them`
4. 选择 `Sync Sentences from sentences-bundle`
5. 点击 `Enable workflow`

## 📊 数据来源

句子数据来源于 [一言](https://hitokoto.cn/) 和 [句子包](https://sentences-bundle.hitokoto.cn/)，包含：

- 🎬 动画、漫画、游戏
- 📚 文学、诗词、网络
- 🎭 影视、原创、其他

## 📄 许可证

本项目采用 AGPL 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- [一言](https://hitokoto.cn/)
- [句子包](https://sentences-bundle.hitokoto.cn/)

---

❗ 本项目部分内容借助 Claude Sonnet 4 完成。

⭐ 如果这个项目对你有帮助，请给个 Star 支持一下！
