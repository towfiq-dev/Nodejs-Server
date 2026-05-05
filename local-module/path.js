const path = require("path")
const extension = path.extname("index.html")
console.log(extension);

const joinName = path.join(__dirname + '/../views')
console.log(joinName);
