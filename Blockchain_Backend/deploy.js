const { interfaces } = require('mocha');
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface,bytecode } = require('./compile');

const provider = new HDWalletProvider(
    "mnemonic goes here", 
    "https://rinkeby.infura.io/v3/77428299719049f88c4aea586de37160"
);

const web3 = new Web3(provider);

const deploy = async ()=>{

    // get accounts 
    const accounts = await web3.eth.getAccounts();

    // deploy to rinkeby
    const Lottery = await new web3.eth.Contract(JSON.parse(interface))
                              .deploy({data : bytecode, arguments : []})
                              .send({ gas : "10000000", from : accounts[0],  gasPrice: "5000000000" });
                           
    console.log(accounts);
    console.log(Lottery.options.address);

};
deploy();