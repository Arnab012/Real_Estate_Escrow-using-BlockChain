// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
contract Counter {
    uint public count;
    string public name;

    constructor(string memory _name, uint _count) {
        count = _count;
        name = _name;
    }

    function increment() public returns (uint FinalCount) {
        count++;
        return count;
    }

    function decrement() public returns (uint FinalCount) {
        count--;
        return count;
    }

    function getCount() public view returns (uint FinalCount) {
        return count;
    }

    function getNAme() public view returns (string memory Name) {
        return name;
    }

    //update the name
    function setName(
        string memory _name
    ) public returns (string memory NewName) {
        name = _name;
        return name;
    }
}
