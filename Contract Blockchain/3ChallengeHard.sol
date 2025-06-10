// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.11;

contract Owner {
    address payable OWNER;
    uint256 MONEY;

    constructor() {
        OWNER = payable(msg.sender);
    }

    modifier onlyOwner() {
        require(msg.sender == OWNER, "You are not the owner");
        _;
    }
}

contract receiverNumber is Owner {
    uint256 priceContract = 25e15;

    event duplicatePrice(uint256 priceContract);

    function verifyNumber(uint8 number) public payable returns (string memory) {
        require(number <= 10, "Number must be between 0 and 10");
        require(msg.value == priceContract, "Insufficient ETH");

        MONEY += msg.value;

        priceContract *= 2;
        emit duplicatePrice(priceContract);

        if (number > 5) {
            return "Maior que 5";
        }

        return "Menor ou igual a 5";
    }

    function getMoney(uint256 getValueMoney)
        public
        onlyOwner
        returns (uint256)
    {
        require(address(this).balance >= getValueMoney, "You don't have money");

        OWNER.transfer(getValueMoney);

        return MONEY;
    }
}
