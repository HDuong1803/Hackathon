import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavCover from "../../components/NavCover";
import NavHeader from "../../components/NavHeader";
import CardTotal from "../../components/CardTotal";
import TableComponent from "../../components/Table";
import {
  TotalProgress,
  TotalWarehouse,
  TotalDistributor,
} from "../../assets/icon";
import axios from "axios";
import { SERVER } from "../../constants/Config";
import { Tag } from "antd";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";

export default function WarehousePage() {
  const [text, setText] = useState("");
  const [total, setTotal] = useState(undefined);
  const [totalSuccess, setTotalSuccess] = useState(undefined);
  const [totalFailure, setTotalFailure] = useState(undefined);
  const onChangeText = (text) => setText(text.target.value);
  const onResetText = () => setText("");
  const onSearch = () => `/warehouse/${text}`;
  const { t, i18n } = useTranslation();

  const columns = [
    {
      title: t("warehouse.batchNo"),
      dataIndex: "batchNo",
      key: "batchNo",
      render: (text) => (
        <Link to={`/warehouse/${text}`}>
          <Tag color={"cyan"}>{text}</Tag>
        </Link>
      ),
    },
    {
      title: t("warehouse.vaccine"),
      dataIndex: "vaccineName",
      key: "vaccineName",
      render: (text) => <Tag color="#2f54eb" >{text}</Tag>,
    },
    {
      title: t("warehouse.quantity"),
      dataIndex: "quantity",
      key: "quantity",
      render: (text) => <Tag>{text}</Tag>,
    },
    {
      title: t("warehouse.temperature"),
      dataIndex: "optimumRangeTemp",
      key: "optimumRangeTemp",
      render: (text) => <Tag>{text}</Tag>,
    },
    {
      title: t("warehouse.humidity"),
      dataIndex: "optimumRangeHum",
      key: "optimumRangeHum",
      render: (text) => <Tag>{text}</Tag>,
    },
    {
      title: t("warehouse.violate"),
      dataIndex: "isViolation",
      key: "isViolation",
      render: (text) => (
        <Tag color={"#531dab"}>{text ? "violate" : t("warehouse.normal")}</Tag>
      ),
    },
    {
      title: t("warehouse.storageDate"),
      dataIndex: "storageDate",
      key: "storageDate",
      render: (text) => {
        const date = new Date(Number(text) * 1000);
        const newDate = dayjs(date).format("DD-MM-YYYY HH:mm:ss");
        return <Tag color={"#092f51"}>{newDate}</Tag>;
      },
    },
    {
      title: t("warehouse.status"),
      dataIndex: "status",
      key: "status",
      render: (text) => <Tag color={"#006d75"}>{text}</Tag>,
    },
    {
      title: t("warehouse.nextAction"),
      dataIndex: "nextAction",
      key: "nextAction",
      render: (text) => (
        <Tag color={"#237804"}>
          {text === "DISTRIBUTOR" ? t("warehouse.distributor") : text}
        </Tag>
      ),
    },
  ];

  const [totalItems, setTotalItems] = useState();
  const [currentPage] = useState(1);
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const getData = await axios.get(
        `${SERVER.baseURL}/warehouser/all?page=${currentPage}&limit=10`
      );
      setDataTable(getData.data.data);
      setTotalItems(getData.data.total);

      const getTotalSuccess = await axios.get(
        `${SERVER.baseURL}/warehouser/countsuccess`
      );
      const getTotalFailure = await axios.get(
        `${SERVER.baseURL}/warehouser/countunsuccess`
      );

      if (getData.data.total) setTotal(getData.data.total);
      if (getTotalSuccess) setTotalSuccess(getTotalSuccess.data.data);
      if (getTotalFailure) setTotalFailure(getTotalFailure.data.data);
     }
    fetchData();
  }, [currentPage]);

  const onChangePage = async (page) => {
    const getData = await axios.get(
      `${SERVER.baseURL}/warehouser/all?page=${page}&limit=10`
    );
    setDataTable(getData.data.data);
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
            {t("warehouse.title")}
          </p>
          <Link to="/create-warehouse" className="main-header_btnText">
            {t("warehouse.create")}
          </Link>
        </div>
        <div className="main-card mt-8">
          <CardTotal
            srcImg={TotalProgress}
            quantity={totalItems}
            desc={t("warehouse.title")}
          />
          <CardTotal
            srcImg={TotalWarehouse}
            quantity={totalSuccess}
            desc={t("warehouse.success")}
          />
          <CardTotal
            srcImg={TotalDistributor}
            quantity={totalFailure}
            desc={t("warehouse.failure")}
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
