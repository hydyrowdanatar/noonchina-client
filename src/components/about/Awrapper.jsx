import React from "react";
import { awrapper } from "../../common";
import { Col, Row } from "antd";
import { useTranslation } from "react-i18next";

const Awrapper = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="awrapper">
        <div className="container ">
          <Row gutter={[15, 45]}>
            {awrapper.map((val, i) => {
              return (
                <Col key={i} xs={12} sm={12} md={6} lg={6} xl={6}>
                  <div className="box flex">
                    <div className="text">
                      <h1>{val.data}</h1>
                      <h3>{t(val.title)}</h3>
                    </div>
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

export default Awrapper;
