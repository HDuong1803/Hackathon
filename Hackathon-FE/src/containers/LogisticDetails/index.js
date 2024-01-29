import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import Stepper from "../../components/Stepper";
import NavHeader from "../../components/NavHeader";
import NavCover from "../../components/NavCover";
import { useParams } from "react-router-dom";
import axios from "axios";
import { SERVER } from "../../constants/Config";

export default function LogisticDetails() {
  const [text, setText] = useState("");
  const onChangeText = (text) => setText(text.target.value);
  const onResetText = () => setText("");
  const onSearch = () => `/details/${text}`;
  let batchNo = useParams();

  const [dataSearch, setDataSearch] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `${SERVER.baseURL}/process/detail?batchNo=${batchNo.id}`
      );
      setDataSearch(response.data.data);
    }

    fetchData();
  }, [batchNo]);

  return (
    <React.Fragment>
      <NavCover />
      <div className="main">
        <NavHeader
          onChange={onChangeText}
          value={text}
          onResetText={onResetText}
          onSearch={onSearch}
        />
        <Stepper batchNo={batchNo} />
        {!dataSearch ? (
          <div className="mt-8 ml-4">
            <h2 className="font-bold text-xl">Search not found: "0 result"</h2>
          </div>
        ) : (
          <div className="flex justify-between ">
            <div className="bg-gray-50 w-3/5 mt-8 ml-4 rounded p-5 mb-80">
              <div className="flex justify-between bg-gray-300 rounded p-4">
                <p className="font-bold text-gray-700">General Information</p>
                <p className="font-bold text-gray-700">#Check</p>
              </div>
              {/* Logistics */}
              {dataSearch?.producerName ? (
                <div className="flex justify-between  rounded p-4 ">
                  <p className="font-bold text-gray-700">Producer</p>
                  <p className="font-bold text-gray-700">
                    {dataSearch?.producerName}
                  </p>
                </div>
              ) : null}

              {/* {dataSearch?.warehouse ? (
                  <div className="flex justify-between  rounded p-4 ">
                    <p className="font-bold text-gray-700">Warehouse</p>
                    <p className="font-bold text-gray-700">
                      {dataSearch?.warehouse}
                    </p>
                  </div>
                ) : null} */}

              {/* {dataSearch?.distributor ? (
                  <div className="flex justify-between  rounded p-4 ">
                    <p className="font-bold text-gray-700">Distributor</p>
                    <p className="font-bold text-gray-700">
                      {dataSearch?.distributor}
                    </p>
                  </div>
                ) : null} */}

              {/* {dataSearch?.vaccinationStation ? (
                  <div className="flex justify-between  rounded p-4 ">
                    <p className="font-bold text-gray-700">Vaccination Station</p>
                    <p className="font-bold text-gray-700">
                      {dataSearch?.vaccinationStation}
                    </p>
                  </div>
                ) : null} */}

              {dataSearch?.quantity ? (
                <div className="flex justify-between  rounded p-4 ">
                  <p className="font-bold text-gray-700">Total quantity of shipment</p>
                  <p className="font-bold text-gray-700">
                    {dataSearch?.quantity}
                  </p>
                </div>
              ) : null}

{dataSearch?.optimumRangeTemp ? (
                <div className="flex justify-between  rounded p-4 ">
                  <p className="font-bold text-gray-700">Optimum Temperature</p>
                  <p className="font-bold text-gray-700">
                    {dataSearch?.optimumRangeTemp}
                  </p>
                </div>
              ) : null}

              {dataSearch?.optimumRangeHum ? (
                <div className="flex justify-between  rounded p-4 ">
                  <p className="font-bold text-gray-700">Optimum Humidity</p>
                  <p className="font-bold text-gray-700">
                    {dataSearch?.optimumRangeHum}
                  </p>
                </div>
              ) : null}

              <div className="flex justify-between bg-gray-300 rounded p-4">
                <p className="font-bold text-gray-700">General Information</p>
                <p className="font-bold text-gray-700">#Tx</p>
              </div>

              <div className="flex justify-between  rounded p-4 ">
                <p className="font-bold text-gray-700">Batch no</p>
                <p className="font-bold text-gray-700">{dataSearch?.batchNo}</p>
              </div>

              <div className="flex justify-between  rounded p-4 ">
                <p className="font-bold text-gray-700">Contract address</p>
                <p className="font-bold text-gray-700">
                  {dataSearch?.contractAddress}
                </p>
              </div>

              <div className="flex justify-between  rounded p-4 ">
                <p className="font-bold text-gray-700">From</p>
                <p className="font-bold text-gray-700">{dataSearch?.from}</p>
              </div>

              <div className="flex justify-between  rounded p-4 ">
                <p className="font-bold text-gray-700">To</p>
                <p className="font-bold text-gray-700">{dataSearch?.to}</p>
              </div>

              <div className="flex justify-between  rounded p-4 ">
                <p className="font-bold text-gray-700">Status</p>
                <p className="font-bold text-gray-700">{dataSearch?.status}</p>
              </div>

              <div className="flex justify-between  rounded p-4 ">
                <p className="font-bold text-gray-700">Next Action</p>
                <p className="font-bold text-gray-700">
                  {dataSearch?.nextAction}
                </p>
              </div>

              <div className="flex justify-between  rounded p-4 ">
                <p className="font-bold text-gray-700">Transaction Hash</p>
                <p className="font-bold text-gray-700">
                  {dataSearch?.transactionHash}
                </p>
              </div>

              <div className="flex justify-between  rounded p-4 ">
                <p className="font-bold text-gray-700">Block hash</p>
                <p className="font-bold text-gray-700">
                  {dataSearch?.blockHash}
                </p>
              </div>

              <div className="flex justify-between  rounded p-4 ">
                <p className="font-bold text-gray-700">Block number</p>
                <p className="font-bold text-gray-700">
                  {Number(dataSearch?.blockNumber)}
                </p>
              </div>

              <div className="flex justify-between  rounded p-4 ">
                <p className="font-bold text-gray-700">Transaction Index</p>
                <p className="font-bold text-gray-700">
                  {Number(dataSearch?.transactionIndex)}
                </p>
              </div>
            </div>

            <div className="w-2/5 h-80 flex justify-center items-center bg-gray-50 rounded mt-8 ml-4 rounded p-5 mb-80 mr-16 ">
              <QRCode
                value={`https://testnet.bscscan.com/tx/${dataSearch?.transactionHash}`}
              />
              {/* <QRCode
                value={`https://traceability-dapps.vercel.app/qrcode-view/${dataSearch?.ipfsLink}`}
              /> */}
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}
