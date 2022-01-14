const hre = require("hardhat");

async function main() {
    const [owner] = await hre.ethers.getSigners();
    const BankContractFactory = await hre.ethers.getContractFactory("Bank");
    const bankContract = await BankContractFactory.deploy();
    await bankContract.deployed();

    console.log("BankContract deployed to:", bankContract.address);
    console.log("BankContract owner address:", owner.address)
}

main()
    .then(() => process.exit(0))
    .catch(err => {
        console.log('error', err);
        process.exit(1);
    })
