const HDWalletProvider = require("truffle-hdwallet-provider");

// Web3 constructor function.
const Web3 = require("web3");

const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
    "blanket fruit flee juice cage length trash heart flip pelican stumble develop",
    "https://rinkeby.infura.io/v3/695500dd6a1c427f9f515b406eabfd73"
);


const web3 = new Web3(provider);

const deploy = async () => {

    const accounts = await web3.eth.getAccounts();

    console.log("Attempting to deploy from account", accounts[0]);

    const result = await new web3.eth.Contract(interface)
        .deploy({ data: bytecode })
        .send({ gas: "1000000", from: accounts[0] });

    console.log("Contract deployed to", result.options.address);
};

deploy();
