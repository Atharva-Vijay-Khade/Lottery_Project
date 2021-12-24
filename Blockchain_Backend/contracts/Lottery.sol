pragma solidity ^0.8.11;


contract Lottery {
    
    // the manager of the Lottery
    address public manager;
    // players in the Lottery
    address[] public players;
    // winner address
    address public winner;
    
    // the manager gets control once contract is deployed
    constructor() {
        manager = msg.sender;
    }

    // function to reset winner
    function reset() public restricted {
        address temp;
        winner = temp;
    }  
    
    // enter function to allow players play the Lottery
    function enter() public payable {
        require( msg.value > 0.01 ether );
        players.push(msg.sender);
    }
    
    // pickWinner function 
    function pickWinner() public restricted {
        uint index = random() % players.length;
        payable(players[index]).transfer(address(this).balance);
        winner = players[index];
        // now reset the players array
        players = new address[](0);
    }
    
    // creating random function which generates "pseudo random values"
    function random() private view returns(uint) {
        return uint(keccak256(abi.encode(block.difficulty, block.timestamp, players)));
    }
    
    // modifier for pickWinner
    modifier restricted() {
        // we make sure that only manager can pick the winner and no on else 
        require(msg.sender == manager);
        _;
    }
    
    // function to return the players list 
    function getPlayers() public view returns(address[] memory){
        return players;
    }
    
}