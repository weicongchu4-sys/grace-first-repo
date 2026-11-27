// greet.test.js —— 用 Node.js 自带的测试工具检查 greet.js 写得对不对
// 运行方式：npm test

const test = require('node:test');
const assert = require('node:assert');
const { greet, farewell } = require('../src/greet');

test('greet 会带上名字打招呼', () => {
  assert.strictEqual(greet('小明'), '你好，小明！欢迎来到 Node.js 的世界。');
});

test('greet 不传名字时默认是 grace', () => {
  assert.strictEqual(greet(), '你好，grace！欢迎来到 Node.js 的世界。');
});

test('farewell 会带上名字告别', () => {
  assert.strictEqual(farewell('小明'), '下次见，小明！写代码要记得多喝水、多休息。');
});
