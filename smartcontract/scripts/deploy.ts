import { ethers, hardhatArguments } from 'hardhat';
import * as Config from './config';

async function main() {
    await Config.initConfig();
    const network = hardhatArguments.network ? hardhatArguments.network : 'dev';
    const [deployer] = await ethers.getSigners();
    console.log('deploy from address: ', deployer.address);

    const VaccineSystemStorage = await ethers.getContractFactory("VaccineSystemStorage");
    const vaccineSystemStorage = await VaccineSystemStorage.deploy();
    console.log('VaccineSystemStorage address: ', await vaccineSystemStorage.getAddress());
    Config.setConfig(network + '.VaccineSystemStorage', await vaccineSystemStorage.getAddress());

    const VaccineSupplyChain = await ethers.getContractFactory("VaccineSupplyChain");
    const vaccineSupplyChain = await VaccineSupplyChain.deploy(vaccineSystemStorage.getAddress());
    console.log('VaccineSupplyChain address: ', await vaccineSupplyChain.getAddress());
    Config.setConfig(network + '.VaccineSupplyChain', await vaccineSupplyChain.getAddress());
    
    const VaccineUserAttend = await ethers.getContractFactory("VaccineUserAttend");
    const vaccineUserAttend = await VaccineUserAttend.deploy(vaccineSystemStorage.getAddress());
    console.log('VaccineUserAttend address: ', await vaccineUserAttend.getAddress());
    Config.setConfig(network + '.VaccineUserAttend', await vaccineUserAttend.getAddress());

    await Config.updateConfig();
}

main().then(() => process.exit(0))
    .catch(err => {
        console.error(err);
        process.exit(1);
});