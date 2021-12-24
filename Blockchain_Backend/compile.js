const path = require("path");
const fs = require("fs");
const solc = require("solc");

const lotteryPath = path.resolve(__dirname, "contracts", "Lottery.sol");
const source = fs.readFileSync(lotteryPath, "utf-8");

var input = {
    language: 'Solidity',
    sources: {
        'Lottery.sol': {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*']
            }
        }
    }
};

var output = JSON.parse(solc.compile(JSON.stringify(input)));

var interface = output.contracts["Lottery.sol"]["Lottery"].abi;

// function traverse(interface) {
//     for (var i in interface) {
//         if (!!interface[i] && typeof (interface[i]) == "object") {
//             console.log(interface[i]);
//             traverse(interface[i]);
//         } else {
//             console.log(interface[i]);
//         }
//     }
// }
// traverse(interface);

var bytecode = output.contracts['Lottery.sol']["Lottery"].evm.bytecode.object;

module.exports = { interface, bytecode };
