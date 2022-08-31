// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract CustomWallet is ERC721 {
  using Counters for Counters.Counter;
  uint public unlockTime;
  address payable public owner;

  event Withdrawal(uint amount, uint when);

  constructor(uint _unlockTime) payable {
      require(
          block.timestamp < _unlockTime,
          "Unlock time should be in the future"
      );z

      unlockTime = _unlockTime;
      owner = payable(msg.sender);
  }

  function createIdentity()
  
  function verifyIdentity()

  function revokeIdentity()
}
