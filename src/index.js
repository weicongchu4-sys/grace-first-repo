// index.js —— 程序入口
// 运行方式：
//   node src/index.js          → 用默认名字 grace 打招呼
//   node src/index.js 小明      → 用你给的名字打招呼

const { greet, farewell } = require('./greet');

const name = process.argv[2] || 'grace';

console.log(greet(name));
console.log(`（你正在使用 Node.js ${process.version} 运行这个程序）`);
console.log(farewell(name));
