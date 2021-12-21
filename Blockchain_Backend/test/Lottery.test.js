const ganache = require('ganache-cli');
const Web3 = require('web3');
const assert = require('assert');
const { interface, bytecode } = require('../compile');

const web3 = new Web3(ganache.provider());

let accounts;
let Lottery;

beforeEach(async()=>{

    // get accounts
    accounts = await web3.eth.getAccounts();

    // deploy the contract
    Lottery = await new web3.eth.Contract(JSON.parse(interface))
                        .deploy({data : bytecode,arguments : []})
                        .send({from : accounts[0],gas : 1000000});
});

describe('Lottery Contract',()=>{

    it('Testing Manager',()=>{
        assert.ok(Lottery.options.address);
    });
    
    it('Allows one account to enter',async()=>{

        await Lottery.methods.enter().send({
            from : accounts[0],
            value : web3.utils.toWei('0.02','ether')
        });

        const players = await Lottery.methods.getPlayers().call({
            from : accounts[0]
        });

        assert.equal(1,players.length);
        assert.equal(accounts[0],players[0]);

    });

    it('Allows multiple accounts to enter',async()=>{

        await Lottery.methods.enter().send({
            from : accounts[0],
            value : web3.utils.toWei('0.02','ether')
        });

        await Lottery.methods.enter().send({
            from : accounts[1],
            value : web3.utils.toWei('0.02','ether')
        });

        await Lottery.methods.enter().send({
            from : accounts[2],
            value : web3.utils.toWei('0.02','ether')
        });

        const players = await Lottery.methods.getPlayers().call({
            from : accounts[0]
        });

        assert.equal(3,players.length);
        assert.equal(accounts[0],players[0]);
        assert.equal(accounts[1],players[1]);
        assert.equal(accounts[2],players[2]);

    });

    it('Requires a minimum amount of ether to enter',async()=>{
        
        try {
            await Lottery.methods.enter().send({
                from : accounts[0],
                value : 0
            });             // thorws error if some minimum amount is required and that we catch in a catch statement and pass the tets using assert(err)
            assert(false);  // if the above doesn't throw error then this fails the test means no minimum value is required to enter which isn't the case
        } catch(err) {
            assert(err);    // just check for trickness 
        }

    });

    it('Other than manager to pickWinner gives error', async()=>{

        try {
            await Lottery.methods.pickWinner().send({
                from : accounts[1]
            });
            assert(false);
        } catch(err) {
            assert(err);
        }
        
    });

    // end to end test 
    it('Testing entire lottery',async ()=>{

        await Lottery.methods.enter().send({
            from : accounts[0],
            value : web3.utils.toWei('2','ether') // used to give value in ethers
        });

        const initialBalance = await web3.eth.getBalance(accounts[0]);

        await Lottery.methods.pickWinner().send({
            from : accounts[0]
        })

        const finalBalance = await web3.eth.getBalance(accounts[0]);

        const diff = finalBalance - initialBalance;

        assert(diff > web3.utils.toWei('1.5','ether'));

    });

    it('Testing if players array gets empty',async()=>{

        await Lottery.methods.enter().send({
            from : accounts[0],
            value : web3.utils.toWei('1','ether')
        });

        await Lottery.methods.pickWinner().send({
            from : accounts[0],
        });

        const players = await Lottery.methods.getPlayers().call();

        assert.equal(0,players.length);

    });

});