// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.11;

library MyFunctions {
    function sum(uint256 a, uint256 b) internal pure returns (uint256) {
        require(a + b >= 0, "Not allowed to return negative numbers");
        return a + b;
    }
}

contract Ownable {
    address owner;

    event OwnershipTransferred(address newOwner);

    modifier onlyOwner() {
        require(msg.sender == owner, "You are not the owner");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function transferOwnerShip(address payable newOwner) public onlyOwner {
        owner = newOwner;
        emit OwnershipTransferred(owner);
    }
}

contract HelloWorld is Ownable {
    using MyFunctions for uint256;

    mapping(address => uint256) public balances;

    function letsSum(uint256 a, uint256 b)
        public
        view
        onlyOwner
        returns (uint256)
    {
        return MyFunctions.sum(a, b);
    }

    // Check my account balance
    function myCash() public view returns (uint256) {
        return balances[msg.sender];
    }

    // Save Wallet
    function saveCash() public payable {
        require(msg.value >= 1 ether, "Insufficient ETH");
        balances[msg.sender] += msg.value;
    }

    // Send ETH to another account
    function sendCash(address payable addressReceiver, uint256 value)
        public
        payable
    {
        require(balances[msg.sender] >= value, "Insufficient ETH");
        balances[msg.sender] -= value;
        addressReceiver.transfer(value);
    }

    // WithDraw ETH
    function withDraw(address payable addressReceiver) public payable {
        require(balances[msg.sender] > 0, "Insufficient ETH");

        uint256 money = balances[msg.sender];
        balances[msg.sender] = 0;

        addressReceiver.transfer(money);
    }
}
