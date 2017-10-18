pragma solidity ^0.4.15;

contract HelloWorld {
    address senderAddress;
    uint amount;

    function HelloWorld() {
        amount = 0;
    }
    
    function receiveEthers() payable returns(uint, address) {
        return (msg.value, msg.sender);
    }
}