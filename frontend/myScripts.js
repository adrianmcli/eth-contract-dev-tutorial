const config = require('./config.js');

const contractAddress = "0xab9f80c39746599675695a202fb3b7ee9c4665dd";


let content = config.web3.eth.call({ to: contractAddress });
console.log('1');
alert(content);
console.log('2');