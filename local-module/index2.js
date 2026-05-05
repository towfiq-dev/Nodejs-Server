const fs = require('fs')
//console.log(fs);
fs.exists('demo2.txt',  (result)=>{
  if (result) {
    console.log('found');
    
  }else{
    console.log('no-found');
    
  }
})

// const fs11 = require('fs')
// fs11.writeFile('demo2.txt', 'I am 22 years old', function (err1) {
//   if (err1) {
//     console.log(err1);
    
//   }else{
//     console.log('success');
    
//   }
// })
// const fs3 = require('fs');
// fs3.rename = require('demo1.txt', 'utf-8', (err3, data)=>{
//   if (err3) {
//     console.log(err3);
    
//   }else{
//     console.log(data);
    
//   }
// })