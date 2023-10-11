import React, { useEffect, useState } from "react";
import { SERVER } from "../../constants/Config";
import axios from "axios";
export default function Stepper({ batchNo }) {
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `${SERVER.baseURL}/timeline/search?keyword=${batchNo}`
      );
      if (response.data) setTimeline(response.data[0]);
    }

    fetchData();
  }, [batchNo]);
  return (
    <React.Fragment>
      <div className="mt-8">
        <div className="grid grid-cols-4 gap-4 w-3/4 m-auto">
          <div
            className={`border-t-4 ${
              timeline?.warehouse ? "border-gray-900" : "border-200-900"
            } pt-4`}
          >
            <p className="uppercase text-gray-900 font-bold">Step 1</p>
            <p className="font-semibold">Warehouse</p>
          </div>
          <div
            className={`border-t-4 ${
              timeline?.distributor ? "border-gray-900" : "border-200-900"
            } pt-4`}
          >
            <p className="uppercase text-gray-900 font-bold">Step 2</p>
            <p className="font-semibold">Distributor</p>
          </div>
          <div
            className={`border-t-4 ${
              timeline?.station ? "border-gray-900" : "border-200-900"
            } pt-4`}
          >
            <p className="uppercase text-gray-400 font-bold">Step 3</p>
            <p className="font-semibold">Vaccination Station</p>
          </div>
          <div
            className={`border-t-4 ${
              timeline?.person ? "border-gray-900" : "border-200-900"
            } pt-4`}
          >
            <p className="uppercase text-gray-400 font-bold">Step 4</p>
            <p className="font-semibold">Patient Shot</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
