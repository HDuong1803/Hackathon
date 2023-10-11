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
  const [totalItems, setTotalItems] = useState();
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
      dataIndex: "producer",
      key: "producer",
      render: (text) => <Tag color="#2f54eb">{text}</Tag>,
    },
    {
      title: t("dashboard.total"),
      dataIndex: "totalWeight",
      key: "totalWeight",
      render: (text) => <p>{text}</p>,
    },
    {
      title: t("dashboard.status"),
      dataIndex: "status",
      key: "status",
      render: (text) => <Tag color={"#237804"}>{text}</Tag>,
    },
  ];

  // useEffect(() => {
  //   async function fetchData() {
  //     const getData = await axios.get(
  //       `${SERVER.baseURL}/process/all?page=${currentPage}&limit=10`
  //     );
  //     setDataTable(getData.data);
  //     setTotalItems(getData.total);

  //     const getTotalProcess = await axios.get(
  //       `${SERVER.baseURL}/process/all?page=${currentPage}&limit=10`
  //     );
  //     const getTotalDistributor = await axios.get(
  //       `${SERVER.baseURL}/distributor/all?page=${currentPage}&limit=10`
  //     );
  //     const getTotalWarehouse = await axios.get(
  //       `${SERVER.baseURL}/warehouse/all?page=${currentPage}&limit=10`
  //     );
  //     const getTotalStation = await axios.get(
  //       `${SERVER.baseURL}/vaccinationstation/all?page=${currentPage}&limit=10`
  //     );
  //     if (getTotalProcess) setTotalProcess(getTotalProcess.total);
  //     if (getTotalDistributor) setTotalDistributor(getTotalDistributor.total);
  //     if (getTotalWarehouse) setTotalWarehouse(getTotalWarehouse.total);
  //     if (getTotalStation) setTotalStation(getTotalStation.total);
  //   }

  //   fetchData();
  // }, [currentPage, total]);

  const onChangePage = async (page) => {
    const getData = await axios.get(
      `${SERVER.baseURL}/process/all?currentPage=${page}&perPage=10`
    );
    setDataTable(getData.data);
  };

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
              onChange: (page, pageSize) => onChangePage(page),
            }}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
