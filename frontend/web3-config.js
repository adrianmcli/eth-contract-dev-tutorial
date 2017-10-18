const web3 = require('web3')
const web3_provider = 'http://localhost:8545'
const _web3 = new web3();
_web3.setProvider(new web3.providers.HttpProvider(web3_provider));
exports.web3 = _web3;

// /* Usage Example: */
// const config = require('./config.js');
// config.web3.eth.X  // where X is whatever web3 API function you want