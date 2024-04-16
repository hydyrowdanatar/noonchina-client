import React from "react";
import "./courses.css";
import { online } from "../../common";
import Title from "../common/title/Title";
import { Col, Row } from "antd";
import { useTranslation } from "react-i18next";

const OnlineCourses = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="online">
        <div className="container">
          <Title subtitle="" title={t("Services")} />
          <Row gutter={[15, 15]}>
            {online.map((el) => {
              return (
                <Col xs={12} sm={12} md={8} lg={8} xl={8} key={el.id}>
                  <div className="box">
                    <div className="img">
                      <img src={el.cover} />
                    </div>
                    <h1>{t(el.courseName)}</h1>
                    <span>{t(el.course)}</span>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </section>
    </>
  );
};

export default OnlineCourses;
