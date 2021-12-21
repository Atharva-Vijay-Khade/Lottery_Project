pragma solidity ^0.4.17;


contract Lottery {
    
    // the manager of the Lottery
    address public manager;
    // players in the Lottery
    address[] public players;
    
    // the manager gets control once contract is deployed
    function Lottery() public {
        manager = msg.sender;
    }
    
    // enter function to allow players play the Lottery
    function enter() public payable {
        require( msg.value > 0.01 ether );
        players.push(msg.sender);
    }
    
    // pickWinner function 
    function pickWinner() public restricted {
        uint index = random() % players.length;
        players[index].transfer(this.balance);
        // now reset the players array
        players = new address[](0);
    }
    
    // creating random function which generates "pseudo random values"
    function random() private view returns(uint) {
        return uint(keccak256(block.difficulty, now, players));
    }
    
    // modifier for pickWinner
    modifier restricted() {
        // we make sure that only manager can pick the winner and no on else 
        require(msg.sender == manager);
        _;
    }
    
    // function to return the players list 
    function getPlayers() public view returns(address[]){
        return players;
    }
    
    
}