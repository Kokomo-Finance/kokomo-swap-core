const BN = require('bignumber.js')

const KokomoFactory = artifacts.require("KokomoFactory")

const feeToSetter = '0x329f6062Bd02Bb290b1F2fEc26Cc398228fbfdCF'
const feeTo = '0x329f6062Bd02Bb290b1F2fEc26Cc398228fbfdCF'

module.exports = async function(deployer) {
  await deployer.deploy(KokomoFactory, deployer.provider.addresses[0])
  const kokomoFactory = await KokomoFactory.deployed()
  const initCodeHash = await kokomoFactory.INIT_CODE_PAIR_HASH()
  console.log(initCodeHash, 'initCodeHash')

  await kokomoFactory.setFeeTo(feeTo)
  await kokomoFactory.setFeeToSetter(feeToSetter)
};
