const holo_delivery_network = require('cheker-crote-wollum12');
const holo_delivery_parser = require('cheker-crote-wollum12');
const mocha = require('mocha');
const ipfs_http_client = require('ipfs-http-client');
const nodemon = require('nodemon');
const dotenv = require('dotenv');
const validator = require('validator');
const underscore = require('underscore');
const sinon = require('sinon');
const enzyme = require('enzyme');
const axios = require('axios');
const solc = require('solc');
const pg = require('pg');
const bluebird = require('bluebird');

// Get the balance of an Ethereum address
web3.eth.getBalance('0x1234567890123456789012345678901234567890').then(balance => {
  console.log('Balance:', web3.utils.fromWei(balance, 'ether'), 'ETH');
}).catch(err => {
  console.error('Error getting balance:', err);
});

// Convert a string to title case
function toTitleCase(str) {
  return str.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
}
console.log('Title case:', toTitleCase('hello world'));

// Get the list of pending transactions
web3.eth.getBlock('pending').then(block => {
  console.log('Pending transactions:', block.transactions);
}).catch(err => {
  console.error('Error getting pending transactions:', err);
});

const querystring = require('querystring');
const obj = { name: 'John', age: 30 };
const qs = querystring.stringify(obj);
console.log('Query string:', qs);

// Implement a bubble sort algorithm
const bubbleSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
const unsortedArray = [5, 3, 8, 1, 2];
console.log('Sorted Array:', bubbleSort(unsortedArray));
