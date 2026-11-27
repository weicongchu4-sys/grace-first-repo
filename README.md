# grace-first-repo

grace 的第一个 GitHub 仓库，由 Doctor 帮她准备。

## 这是什么

一个干净的起点仓库。以后不管是写代码、放笔记，还是做小项目，都可以从这里开始，或者以它为模板再开新仓库。

## 已完成

- GitHub 账号 weicongchu4-sys 已连接 Muse
- Muse 的 GitHub App 已安装并授权全部仓库

创建日期：2026-11-17

## 第一个 Node.js 小项目

2026-11-27，这个仓库迎来了第一个真正能跑的程序：一个会打招呼的 Node.js 小项目。它是通过新分支 `add-node-starter` 和一次合并请求进入主分支的——这也是第一次完整走完「开分支 → 提交 → 发起合并请求 → 合并」的流程。

### 项目结构

- `package.json` —— 项目的“身份证”，写着项目名、运行命令等
- `src/index.js` —— 程序入口，运行后会打印问候语
- `src/greet.js` —— 负责生成问候语和告别语的小模块
- `test/greet.test.js` —— 自动测试，检查 greet.js 写得对不对
- `.gitignore` —— 告诉 Git 哪些文件不用提交（比如 node_modules）

### 怎么运行

先确认电脑上装了 Node.js（18 或更高版本），然后在这个文件夹里运行：

```bash
# 运行程序（默认向 grace 打招呼）
npm start

# 也可以换个名字
node src/index.js 小明

# 运行自动测试
npm test
```

看到「你好，grace！欢迎来到 Node.js 的世界。」就说明跑通了。
