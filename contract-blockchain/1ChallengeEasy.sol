// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.11;

contract receiverNumber {
    function verifyNumber(uint8 number) public payable returns (string memory) {
        require(number <= 10, "Number must be between 0 and 10");
        require(msg.value == 25e15, "Insufficient ETH");

        if (number > 5) {
            return "Maior que 5";
        }

        return "Menor ou igual a 5";
    }
}
