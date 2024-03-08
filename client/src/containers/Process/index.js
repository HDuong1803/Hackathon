/* eslint-disable no-unused-vars */
import { Tag } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { SERVER } from "../../constants/Config";
import NavCover from "../../components/NavCover";
import NavHeader from "../../components/NavHeader";
import CardTotal from "../../components/CardTotal";
import {
  TotalDistributor,
  TotalProgress,
  TotalVaccinationStation,
  TotalWarehouse,
} from "../../assets/icon";
import TableComponent from "../../components/Table";

export default function ProcessPage() {
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage] = useState(1);
  const [dataTable, setDataTable] = useState([]);
  const [text, setText] = useState("");
  const [totalProcess, setTotalProcess] = useState(undefined);
  const [totalWarehouse, setTotalWarehouse] = useState(undefined);
  const [totalDistributor, setTotalDistributor] = useState(undefined);
  const [totalStation, setTotalStation] = useState(undefined);
  const [total] = useState(undefined);
  const onChangeText = (text) => setText(text.target.value);
  const onResetText = () => setText("");
  const onSearch = () => `/logistic-details/${text}`;
  const { t } = useTranslation();

  const columns = [
    {
      title: t("dashboard.batchNo"),
      dataIndex: "batchNo",
      key: "batchNo",
      render: (text) => (
        <Link to={`/logistic-details/${text}`}>
          <Tag color={"cyan"}>{text}</Tag>
        </Link>
      ),
    },
    {
      title: t("dashboard.producer"),
      dataIndex: "producerName",
      key: "producer",
      render: (text) => <Tag color="#2f54eb">{text}</Tag>,
    },
    {
      title: t("dashboard.total"),
      dataIndex: "quantity",
      key: "quantity",
      render: (text) => <p>{text}</p>,
    },
    {
      title: t("dashboard.nextAction"),
      dataIndex: "nextAction",
      key: "nextAction",
      render: (text) => <Tag color={"#237804"}>{text === "WAREHOUSER" ? t("dashboard.warehouse") : text}</Tag>,
    },
  ];

  useEffect(() => {
    async function fetchData() {
        const getData = await axios.get(
          `${SERVER.baseURL}/process/all?page=${currentPage}&limit=10`
        );
        setDataTable(getData.data.data);
        setTotalItems(getData.data.total);

      const getTotalProcess = await axios.get(
        `${SERVER.baseURL}/process/all?page=${currentPage}&limit=10`
      );
      const getTotalDistributor = await axios.get(
        `${SERVER.baseURL}/distributor/all?page=${currentPage}&limit=10`
      );
      const getTotalWarehouse = await axios.get(
        `${SERVER.baseURL}/warehouser/all?page=${currentPage}&limit=10`
      );
      const getTotalStation = await axios.get(
        `${SERVER.baseURL}/vaccinationStation/all?page=${currentPage}&limit=10`
      );

      if (getTotalProcess) setTotalProcess(getTotalProcess.data.total);
      if (getTotalDistributor) setTotalDistributor(getTotalDistributor.data.total);
      if (getTotalWarehouse) setTotalWarehouse(getTotalWarehouse.data.total);
      if (getTotalStation) setTotalStation(getTotalStation.data.total);
    }
    fetchData();

  }, [currentPage]);

  

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
        <div className="main-header mt-8">
          <p className="main-header_title font-bold text-xl">
            {t("sidebar.dashboard")}
          </p>
          <Link to="/create-process" className="main-header_btnText">
            {t("dashboard.createProcess")}
          </Link>
        </div>
        <div className="main-card mt-8">
          <CardTotal
            srcImg={TotalProgress}
            quantity={totalProcess}
            desc={t("dashboard.progress")}
          />
          <CardTotal
            srcImg={TotalWarehouse}
            quantity={totalWarehouse}
            desc={t("dashboard.warehouse")}
          />
          <CardTotal
            srcImg={TotalDistributor}
            quantity={totalDistributor}
            desc={t("dashboard.distributor")}
          />
          <CardTotal
            srcImg={TotalVaccinationStation}
            quantity={totalStation}
            desc={t("dashboard.vaccinationStation")}
          />
        </div>

        <div className="px-6 mt-8 mr-8">
          <TableComponent
            dataSource={dataTable}
            columns={columns}
            pagination={{
              total: totalItems,
              // onChange: ,
            }}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
