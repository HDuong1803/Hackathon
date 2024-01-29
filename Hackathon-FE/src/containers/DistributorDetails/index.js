import axios from "axios";
import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { useParams } from "react-router-dom";
import { SERVER } from "../../constants/Config";
import NavCover from "../../components/NavCover";
import NavHeader from "../../components/NavHeader";
import Stepper from "../../components/Stepper";

export default function DistributorDetails() {
  const [text, setText] = useState("");
  const onChangeText = (text) => setText(text.target.value);
  const onResetText = () => setText("");
  const onSearch = () => `/distributor/${text}`;
  let { id } = useParams();

  const [dataSearch, setDataSearch] = useState();

  // useEffect(() => {
  //   async function fetchData() {
  //     const data = await axios.get(
  //       `${SERVER.baseURL}/distributor?keyword=${id}`
  //     );
  //     setDataSearch(data[0]);
  //   }

  //   fetchData();
  // }, [id]);

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
        <Stepper batchNo={id} />
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
              {dataSearch?.shippingName ? (
                <div className="flex justify-between  rounded p-4 ">
                  <p className="font-bold text-gray-700">Shipping name</p>
                  <p className="font-bold text-gray-700">
                    {dataSearch?.shippingName}
                  </p>
                </div>
              ) : null}

              {dataSearch?.shippingNo ? (
                <div className="flex justify-between  rounded p-4 ">
                  <p className="font-bold text-gray-700">Shipping no</p>
                  <p className="font-bold text-gray-700">
                    {dataSearch?.shippingNo}
                  </p>
                </div>
              ) : null}

              {dataSearch?.quantity ? (
                <div className="flex justify-between  rounded p-4 ">
                  <p className="font-bold text-gray-700">Quantity</p>
                  <p className="font-bold text-gray-700">
                    {dataSearch?.quantity}
                  </p>
                </div>
              ) : null}

              {dataSearch?.departureDateTime ? (
                <div className="flex justify-between  rounded p-4 ">
                  <p className="font-bold text-gray-700">Departure Date Time</p>
                  <p className="font-bold text-gray-700">
                    {dataSearch?.departureDateTime}
                  </p>
                </div>
              ) : null}

              {dataSearch?.estimateDateTime ? (
                <div className="flex justify-between  rounded p-4 ">
                  <p className="font-bold text-gray-700">Estimate Date Time</p>
                  <p className="font-bold text-gray-700">
                    {dataSearch?.estimateDateTime}
                  </p>
                </div>
              ) : null}

              {dataSearch?.distributorId ? (
                <div className="flex justify-between  rounded p-4 ">
                  <p className="font-bold text-gray-700">Distributor ID</p>
                  <p className="font-bold text-gray-700">
                    {dataSearch?.distributorId}
                  </p>
                </div>
              ) : null}

              {dataSearch?.optimumTemp ? (
                <div className="flex justify-between  rounded p-4 ">
                  <p className="font-bold text-gray-700">Optimum Temperature</p>
                  <p className="font-bold text-gray-700">
                    {dataSearch?.optimumTemp}
                  </p>
                </div>
              ) : null}

              {dataSearch?.optimumHum ? (
                <div className="flex justify-between  rounded p-4 ">
                  <p className="font-bold text-gray-700">Optimum Humidity</p>
                  <p className="font-bold text-gray-700">
                    {dataSearch?.optimumHum}
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
                  {dataSearch?.blockNumber}
                </p>
              </div>

              

              <div className="flex justify-between  rounded p-4 ">
                <p className="font-bold text-gray-700">Transaction Index</p>
                <p className="font-bold text-gray-700">
                  {dataSearch?.transactionIndex}
                </p>
              </div>

              
            </div>

            <div className="w-2/5 h-80 flex justify-center items-center bg-gray-50 rounded mt-8 ml-4 rounded p-5 mb-80 mr-16 ">
              {/* <QRCode
                value={`https://traceability-dapps.vercel.app/qrcode-view/${dataSearch?.ipfsLink}`}
              /> */}
              <QRCode
                value={`https://testnet.bscscan.com/tx/${dataSearch?.transactionHash}`}
              />
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}
