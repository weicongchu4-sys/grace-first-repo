// greet.js —— 负责“打招呼”的小模块
// 把功能拆到单独的文件里，是写代码最基础也最重要的一步：模块化。

/**
 * 生成一句问候语
 * @param {string} name 对方的名字，不传时默认是 grace
 * @returns {string} 问候语
 */
function greet(name = 'grace') {
  const who = String(name).trim() || 'grace';
  return `你好，${who}！欢迎来到 Node.js 的世界。`;
}

/**
 * 生成一句告别语
 * @param {string} name 对方的名字，不传时默认是 grace
 * @returns {string} 告别语
 */
function farewell(name = 'grace') {
  const who = String(name).trim() || 'grace';
  return `下次见，${who}！写代码要记得多喝水、多休息。`;
}

module.exports = { greet, farewell };
