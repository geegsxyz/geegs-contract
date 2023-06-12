// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  // const Fee = await hre.ethers.getContractFactory("FeeStructure");
  // const fee = await Fee.deploy(5, 1);

  // await fee.deployed();

  // console.log(`FeeStructure deployed to ${fee.address}`);

  const Geegs = await hre.ethers.getContractFactory("Geegs");
  const geegs = await Geegs.deploy(
    "",
    "0xB803ce67BbAb71BF850C1fbFD11C0FAC8BB50E3e"
  );

  await geegs.deployed();

  console.log(`Geegs deployed to ${geegs.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
