// https://eth-rinkeby.alchemyapi.io/v2/fjN_s9z1XayNUPaNEs5uCtHGpJTNe0jd
const dotenv = require('dotenv')
dotenv.config()
require('@nomiclabs/hardhat-waffle');
console.log(process.env.PRIVATE_KEY)
module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/UXxSLyb33x4tPgRXWybvbx2ifrVI1q-5',
      accounts: [`${process.env.PRIVATE_KEY}`]
    }
  }
}