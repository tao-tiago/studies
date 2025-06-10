// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.11;

contract receiverNumber {
    uint256 priceContract = 25e15;

    event duplicatePrice(uint256 priceContract);

    function verifyNumber(uint8 number) public payable returns (string memory) {
        require(number <= 10, "Number must be between 0 and 10");
        require(msg.value == priceContract, "Insufficient ETH");

        priceContract *= 2;
        emit duplicatePrice(priceContract);

        if (number > 5) {
            return "Maior que 5";
        }

        return "Menor ou igual a 5";
    }
}
