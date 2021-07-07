# node package version
- 13.4.6
- major:13, minor:4, patch:6

# npm 版本符号
- ^：锁定major
- ~：锁定minor
- 空:锁定ptach
- *：最新版本
# node 的浏览器端调试
`node --inspect --inspect-brk xxx.js`

# node进程管理工具
- supervisor
- nodemon (npm i nodemon -g ;nodemon xxx.js)
- forever
- pm2

# 创建express项目
```bash
npm install -g express-generator
cd xxx
express -e
npm i
npm run start
```
