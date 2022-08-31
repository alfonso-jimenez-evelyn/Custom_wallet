// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/AccessControl.sol";

contract CustomWallet {

  bytes32 internal constant USER_ROLE = keccak256("USER_ROLE");
  struct UserRegister {  
    address user;
    bytes32 data_hashed;
    bytes32 password_hashed;
  }

  mapping (bytes32 => UserRegister) private users;


  function registerIdentity(string memory name, string memory email, string memory country, string memory password) public {
    bytes32 data = keccak256(abi.encodePacked(name, email, country));
    bytes32 password = keccak256(password);
    users[id] = UserRegister(msg.sender, data, password);
  }
  
  function verifyIdentity()

  function revokeIdentity()


  event Withdrawal(uint amount, uint when);
}
