import detectEthereumProvider from "@metamask/detect-provider";
import VaccineUserAttend from "../contracts/VaccineUserAttend.json";
import { ethers, Contract } from "ethers";

const getSCEthereumVaccineUserAttend = () =>
  new Promise(async (resolve, reject) => {
    let provider = await detectEthereumProvider();
    if (provider) {
      await provider.request({ method: "eth_requestAccounts" });
      provider = new ethers.providers.Web3Provider(provider);
      const signer = provider.getSigner();
      const vaccineSPSC = new Contract(
        "0xffe28e183df1ac25b34837cffb473c38115eaa5b",
        VaccineUserAttend.abi,
        signer
      );

      resolve({ vaccineSPSC });
      return;
    }
    reject("Install Metamask");
  });

export default getSCEthereumVaccineUserAttend;
