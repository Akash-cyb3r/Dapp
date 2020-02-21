const HDWalletProvider = require("truffile-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "cycle veteran monitor ancient seed green fashion school warm tomato like unknown",
  "https://renkeby.infura.io/...."
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("attempting to deploy contract from account", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ["hi"] })
    .send({ gas: "1000000", from: accounts[0] });

  console.log("contract deployed to", result.option.address);
};
deploy();
