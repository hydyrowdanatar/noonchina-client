import { Table } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import Title from "../common/title/Title";
import "./statistics.css";

const Statistics = () => {
  const { t } = useTranslation();

  const dataSource = [
    {
      key: "1",
      country: t("r1"),
      percentage: "31,3%",
    },
    {
      key: "2",
      country: t("r2"),
      percentage: "10,6%",
    },
    {
      key: "3",
      country: t("r3"),
      percentage: "10,2%",
    },
    {
      key: "4",
      country: t("r4"),
      percentage: "8,3%",
    },
    {
      key: "5",
      country: t("r5"),
      percentage: "8,1%",
    },
    {
      key: "6",
      country: t("r6"),
      percentage: "8,0%",
    },
    {
      key: "7",
      country: t("r7"),
      percentage: "6,5%",
    },
    {
      key: "8",
      country: t("r8"),
      percentage: "6,2%",
    },
    {
      key: "9",
      country: t("r9"),
      percentage: "6,0%",
    },
    {
      key: "10",
      country: t("r10"),
      percentage: "4,7%",
    },
  ];

  const columns = [
    {
      title: t("c1"),
      dataIndex: "country",
      key: "country",
      width: 400,
    },
    {
      title: t("c2"),
      dataIndex: "percentage",
      key: "percentage",
    },
  ];
  return (
    <div className="statistics">
      <Title subtitle="" title={t("statisticsT")} />
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={false}
        bordered
        style={{ marginTop: "16px" }}
      />
    </div>
  );
};

export default Statistics;
