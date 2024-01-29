import { Tag } from "antd";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { SERVER } from "../../constants/Config";
import axios from "axios";
import NavCover from "../../components/NavCover";
import NavHeader from "../../components/NavHeader";
import CardTotal from "../../components/CardTotal";
import {
  TotalProgress,
  TotalWarehouse,
  TotalDistributor,
} from "../../assets/icon";import TableComponent from "../../components/Table";

export default function DistributorPage() {
  const [text, setText] = useState("");
  const onChangeText = (text) => setText(text.target.value);
  const onResetText = () => setText("");
  const onSearch = () => `/distributor/${text}`;

  const { t } = useTranslation();

  const columns = [
    {
      title: t("distributor.batchNo"),
      dataIndex: "batchNo",
      key: "batchNo",
      render: (text) => (
        <Link to={`/distributor/${text}`}>
          <Tag color={"purple"}>{text}</Tag>
        </Link>
      ),
    },
    {
      title: t("distributor.shippingName"),
      dataIndex: "shippingName",
      key: "shippingName",
      render: (text) => <>{text}</>,
    },
    {
      title: t("distributor.departureDateTime"),
      dataIndex: "departureDateTime",
      key: "departureDateTime",
      render: (text) => (
        <Tag color="green">
          {dayjs(Number(text) * 1000).format("DD-MM-YYYY")}
        </Tag>
      ),
    },
    {
      title: t("distributor.estimateDateTime"),
      dataIndex: "estimateDateTime",
      key: "estimateDateTime",
      render: (text) => (
        <Tag color="orange">
          {dayjs(Number(text) * 1000).format("DD-MM-YYYY")}
        </Tag>
      ),
    },
    {
      title: t("distributor.quantity"),
      dataIndex: "quantity",
      key: "quantity",
      render: (text) => <Tag>{text}</Tag>,
    },
    {
      title: t("distributor.optimumRangeTemp"),
      dataIndex: "optimumTemp",
      key: "optimumTemp",
      render: (text) => <Tag color={"green"}>{text}</Tag>,
    },
    {
      title: t("distributor.violate"),
      dataIndex: "violate",
      key: "violate",
      render: (text) => <Tag>{text ? "Violate" : "Normal"}</Tag>,
    },
    {
      title: t("distributor.status"),
      dataIndex: "status",
      key: "status",
      render: (text) => <Tag color={"green"}>{text}</Tag>,
    },
    {
      title: t("distributor.nextAction"),
      dataIndex: "nextAction",
      key: "nextAction",
      render: (text) => (
        <Tag color={"green"}>
          {text === "DISTRIBUTOR" ? t("warehouse.distributor") : text}
        </Tag>
      ),
    },
  ];
  const [totalItems, setTotalItems] = useState();
  const [currentPage] = useState(1);
  const [dataTable, setDataTable] = useState([]);
  const [total, setTotal] = useState(undefined);
  const [totalSuccess, setTotalSuccess] = useState(undefined);
  const [totalFailure, setTotalFailure] = useState(undefined);

  useEffect(() => {
    async function fetchData() {
      const getData = await axios.get(
        `${SERVER.baseURL}/distributor/all?page=${currentPage}&limit=10`
      );
      setDataTable(getData.data.data);
      setTotalItems(getData.data.total);

      const getTotalSuccess = await axios.get(
        `${SERVER.baseURL}/distributor/countsuccess`
      );
      const getTotalFailure = await axios.get(
        `${SERVER.baseURL}/distributor/countunsuccess`
      );

      if (getData.data.total) setTotal(getData.data.total);
      if (getTotalSuccess) setTotalSuccess(getTotalSuccess.data.data);
      if (getTotalFailure) setTotalFailure(getTotalFailure.data.data);
    }

    fetchData();
  }, [currentPage]);

  const onChangePage = async (page) => {
    const getData = await axios.get(
      `${SERVER.baseURL}/distributor/all?page=${page}&limit=10`
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
            {t("distributor.title")}
          </p>
          <Link to="/create-distributor" className="main-header_btnText">
            {t("distributor.create")}
          </Link>
        </div>
        <div className="main-card mt-8">
          <CardTotal
            srcImg={TotalProgress}
            quantity={totalItems}
            desc={t("distributor.title")}
          />
          <CardTotal srcImg={TotalWarehouse} quantity={totalSuccess} desc={t("distributor.success")} />
            <CardTotal srcImg={TotalDistributor} quantity={totalFailure} desc={t("distributor.failure")} />
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
