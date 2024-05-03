import {
  Button,
  Card,
  Col,
  Image,
  Row,
  Table,
  Tooltip,
  Typography,
} from "antd";
import { useGetPekinQuery } from "../../store/universities/pekin.api";
import { useGetShanghaiQuery } from "../../store/universities/shanghai.api";
import { useGetGuangzhouQuery } from "../../store/universities/guangzhou.api";
import { useGetOthersQuery } from "../../store/universities/others.api";
import { base_url } from "../../common";
import "./universities.css";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Loader from "../common/Loader";
import Title from "../common/title/Title";
import Footer from "../footer/Footer";

const University = () => {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();

  const url =
    i18n.language == "tm" || i18n.language == "en"
      ? "https://forms.office.com/r/Wi3GyMt0RY"
      : "https://forms.office.com/r/w9Rkij8mJ2?origin=lprLink";

  const { data: pekin, isLoading: pekingLoading } = useGetPekinQuery({});
  const { data: shanghai, isLoading: shanghaiLoading } = useGetShanghaiQuery(
    {}
  );
  const { data: guangzhou, isLoading: guangzhouLoading } = useGetGuangzhouQuery(
    {}
  );

  const { data: others, isLoading: othersLoading } = useGetOthersQuery({});

  const column = [
    {
      title: "University name",
      dataIndex: "name",
      key: "name",
      render: (_, record) => record?.attributes.name,
    },
    {
      title: "University city",
      dataIndex: "city",
      key: "city",
      render: (_, record) => record?.attributes.city,
    },
    {
      title: "Apply",
      dataIndex: "city",
      key: "city",
      fixed: "right",
      width: 160,
      render: () => (
        <a href={url} target="_blank" className="outline-btn">
          {t("apply")}
        </a>
      ),
    },
  ];

  return (
    <>
      <section className="universities">
        <div className="container">
          <Title title={t("u1")} />
          <Row gutter={[15, 15]} className="university-cards">
            {!pekingLoading ? (
              pekin?.data?.map((el, i) => {
                const image = el?.attributes?.image.data[0].attributes.url;
                return (
                  <Col
                    xs={12}
                    sm={12}
                    md={12}
                    lg={8}
                    xl={6}
                    key={`Column-id-${i}`}
                  >
                    <Card
                      hoverable
                      cover={
                        <Image
                          className="card-img"
                          src={`${base_url}${image}`}
                          alt={`university-${i}`}
                          height={180}
                        />
                      }
                    >
                      <Tooltip
                        title={
                          (i18n.language === "en" && el.attributes.name_en) ||
                          (i18n.language === "tm" && el.attributes.name_tm) ||
                          (i18n.language === "ru" && el.attributes.name_ru)
                        }
                      >
                        <Typography.Title
                          className="card-title"
                          level={4}
                          ellipsis
                          style={{
                            width: "100%",
                            marginTop: "-20px",
                          }}
                        >
                          {i18n.language === "en" && el.attributes.name_en}
                          {i18n.language === "tm" && el.attributes.name_tm}
                          {i18n.language === "ru" && el.attributes.name_ru}
                        </Typography.Title>
                      </Tooltip>
                      <hr style={{ color: "grey", marginBottom: 10 }} />
                      <div className="university-card-content">
                        <p className="card-text" style={{ fontWeight: "bold" }}>
                          {t("city")}
                        </p>
                        <p className="card-text" style={{ color: "grey" }}>
                          {i18n.language === "en" && el.attributes.city_en}
                          {i18n.language === "tm" && el.attributes.city_tm}
                          {i18n.language === "ru" && el.attributes.city_ru}
                        </p>
                      </div>
                      <div className="university-card-content">
                        <p className="card-text" style={{ fontWeight: "bold" }}>
                          {t("faculty")}
                        </p>
                        <p className="card-text" style={{ color: "grey" }}>
                          {el.attributes.faculty_number}
                        </p>
                      </div>
                      <div className="university-card-content">
                        <p className="card-text" style={{ fontWeight: "bold" }}>
                          {t("foundedIn")}
                        </p>
                        <Typography.Text
                          className="card-text"
                          style={{ color: "grey" }}
                        >
                          {el.attributes.year}
                        </Typography.Text>
                      </div>
                      <button
                        className="outline-btn"
                        onClick={() => {
                          navigate(`${el?.attributes.name_en}`);
                          sessionStorage.setItem(
                            "name_ru",
                            el?.attributes?.name_ru
                          );
                          sessionStorage.setItem(
                            "name_tm",
                            el?.attributes?.name_tm
                          );
                          sessionStorage.setItem(
                            "name_en",
                            el?.attributes?.name_en
                          );
                          sessionStorage.setItem(
                            "city_en",
                            el?.attributes?.city_en
                          );
                          sessionStorage.setItem(
                            "city_tm",
                            el?.attributes?.city_tm
                          );
                          sessionStorage.setItem(
                            "city_ru",
                            el?.attributes?.city_ru
                          );
                          sessionStorage.setItem(
                            "description_ru",
                            el?.attributes?.description_ru
                          );
                          sessionStorage.setItem(
                            "description_tm",
                            el?.attributes?.description_tm
                          );
                          sessionStorage.setItem(
                            "description_en",
                            el?.attributes?.description_en
                          );
                          sessionStorage.setItem("year", el?.attributes?.year);
                          sessionStorage.setItem(
                            "faculty_number",
                            el?.attributes?.faculty_number
                          );
                          sessionStorage.setItem(
                            "image_url",
                            el?.attributes?.image.data[0].attributes.url
                          );
                        }}
                      >
                        {t("applyBtn")}
                      </button>
                    </Card>
                  </Col>
                );
              })
            ) : (
              <Loader />
            )}
          </Row>

          <Title title={t("u2")} />
          <Row gutter={[15, 15]} className="university-cards">
            {!shanghaiLoading ? (
              shanghai?.data?.map((el, i) => {
                const image = el?.attributes?.image.data[0].attributes.url;
                return (
                  <Col
                    xs={12}
                    sm={12}
                    md={12}
                    lg={8}
                    xl={6}
                    key={`Column-${i}`}
                  >
                    <Card
                      hoverable
                      cover={
                        <Image
                          className="card-img"
                          src={`${base_url}${image}`}
                          alt={`university-${i}`}
                          height={180}
                        />
                      }
                    >
                      <Tooltip
                        title={
                          (i18n.language === "en" && el.attributes.name_en) ||
                          (i18n.language === "tm" && el.attributes.name_tm) ||
                          (i18n.language === "ru" && el.attributes.name_ru)
                        }
                      >
                        <Typography.Title
                          className="card-title"
                          level={4}
                          ellipsis
                          style={{
                            width: "100%",
                            marginTop: "-20px",
                          }}
                        >
                          {i18n.language === "en" && el.attributes.name_en}
                          {i18n.language === "tm" && el.attributes.name_tm}
                          {i18n.language === "ru" && el.attributes.name_ru}
                        </Typography.Title>
                      </Tooltip>
                      <hr style={{ color: "grey", marginBottom: 10 }} />
                      <div className="university-card-content">
                        <Typography.Text
                          className="card-text"
                          style={{ fontWeight: "bold" }}
                        >
                          {t("city")}
                        </Typography.Text>
                        <Typography.Text
                          className="card-text"
                          style={{ color: "grey" }}
                        >
                          {i18n.language === "en" && el.attributes.city_en}
                          {i18n.language === "tm" && el.attributes.city_tm}
                          {i18n.language === "ru" && el.attributes.city_ru}
                        </Typography.Text>
                      </div>
                      <div className="university-card-content">
                        <Typography.Text
                          className="card-text"
                          style={{ fontWeight: "bold" }}
                        >
                          {t("faculty")}
                        </Typography.Text>
                        <Typography.Text
                          className="card-text"
                          style={{ color: "grey" }}
                        >
                          {el.attributes.faculty_number}
                        </Typography.Text>
                      </div>
                      <div className="university-card-content">
                        <Typography.Text
                          className="card-text"
                          style={{ fontWeight: "bold" }}
                        >
                          {t("foundedIn")}
                        </Typography.Text>
                        <Typography.Text
                          className="card-text"
                          style={{ color: "grey" }}
                        >
                          {el.attributes.year}
                        </Typography.Text>
                      </div>
                      <button
                        className="outline-btn"
                        onClick={() => {
                          navigate(`${el?.attributes.name_en}`);
                          sessionStorage.setItem(
                            "name_ru",
                            el?.attributes?.name_ru
                          );
                          sessionStorage.setItem(
                            "name_tm",
                            el?.attributes?.name_tm
                          );
                          sessionStorage.setItem(
                            "name_en",
                            el?.attributes?.name_en
                          );
                          sessionStorage.setItem(
                            "city_en",
                            el?.attributes?.city_en
                          );
                          sessionStorage.setItem(
                            "city_tm",
                            el?.attributes?.city_tm
                          );
                          sessionStorage.setItem(
                            "city_ru",
                            el?.attributes?.city_ru
                          );
                          sessionStorage.setItem(
                            "description_ru",
                            el?.attributes?.description_ru
                          );
                          sessionStorage.setItem(
                            "description_tm",
                            el?.attributes?.description_tm
                          );
                          sessionStorage.setItem(
                            "description_en",
                            el?.attributes?.description_en
                          );
                          sessionStorage.setItem("year", el?.attributes?.year);
                          sessionStorage.setItem(
                            "faculty_number",
                            el?.attributes?.faculty_number
                          );
                          sessionStorage.setItem(
                            "image_url",
                            el?.attributes?.image.data[0].attributes.url
                          );
                        }}
                      >
                        {t("applyBtn")}
                      </button>
                    </Card>
                  </Col>
                );
              })
            ) : (
              <Loader />
            )}
          </Row>

          <Title title={t("u3")} />
          <Row gutter={[15, 15]} className="university-cards">
            {!guangzhouLoading ? (
              guangzhou?.data?.map((el, i) => {
                const image = el?.attributes?.image.data[0].attributes.url;
                return (
                  <Col
                    xs={12}
                    sm={12}
                    md={12}
                    lg={8}
                    xl={6}
                    key={`Column-key-${i}`}
                  >
                    <Card
                      hoverable
                      cover={
                        <Image
                          className="card-img"
                          src={`${base_url}${image}`}
                          alt={`university-${i}`}
                          height={180}
                        />
                      }
                    >
                      <Tooltip
                        title={
                          (i18n.language === "en" && el.attributes.name_en) ||
                          (i18n.language === "tm" && el.attributes.name_tm) ||
                          (i18n.language === "ru" && el.attributes.name_ru)
                        }
                      >
                        <Typography.Title
                          className="card-title"
                          level={4}
                          ellipsis
                          style={{
                            width: "100%",
                            marginTop: "-20px",
                          }}
                        >
                          {i18n.language === "en" && el.attributes.name_en}
                          {i18n.language === "tm" && el.attributes.name_tm}
                          {i18n.language === "ru" && el.attributes.name_ru}
                        </Typography.Title>
                      </Tooltip>
                      <hr style={{ color: "grey", marginBottom: 10 }} />
                      <div className="university-card-content">
                        <Typography.Text
                          className="card-text"
                          style={{ fontWeight: "bold" }}
                        >
                          {t("city")}
                        </Typography.Text>
                        <Typography.Text style={{ color: "grey" }}>
                          {i18n.language === "en" && el.attributes.city_en}
                          {i18n.language === "tm" && el.attributes.city_tm}
                          {i18n.language === "ru" && el.attributes.city_ru}
                        </Typography.Text>
                      </div>
                      <div className="university-card-content">
                        <Typography.Text
                          className="card-text"
                          style={{ fontWeight: "bold" }}
                        >
                          {t("faculty")}
                        </Typography.Text>
                        <Typography.Text
                          className="card-text"
                          style={{ color: "grey" }}
                        >
                          {el.attributes.faculty_number}
                        </Typography.Text>
                      </div>
                      <div className="university-card-content">
                        <Typography.Text
                          className="card-text"
                          style={{ fontWeight: "bold" }}
                        >
                          {t("foundedIn")}
                        </Typography.Text>
                        <Typography.Text
                          className="card-text"
                          style={{ color: "grey" }}
                        >
                          {el.attributes.year}
                        </Typography.Text>
                      </div>
                      <button
                        className="outline-btn"
                        onClick={() => {
                          navigate(`${el?.attributes.name_en}`);
                          sessionStorage.setItem(
                            "name_ru",
                            el?.attributes?.name_ru
                          );
                          sessionStorage.setItem(
                            "name_tm",
                            el?.attributes?.name_tm
                          );
                          sessionStorage.setItem(
                            "name_en",
                            el?.attributes?.name_en
                          );
                          sessionStorage.setItem(
                            "city_en",
                            el?.attributes?.city_en
                          );
                          sessionStorage.setItem(
                            "city_tm",
                            el?.attributes?.city_tm
                          );
                          sessionStorage.setItem(
                            "city_ru",
                            el?.attributes?.city_ru
                          );
                          sessionStorage.setItem(
                            "description_ru",
                            el?.attributes?.description_ru
                          );
                          sessionStorage.setItem(
                            "description_tm",
                            el?.attributes?.description_tm
                          );
                          sessionStorage.setItem(
                            "description_en",
                            el?.attributes?.description_en
                          );
                          sessionStorage.setItem("year", el?.attributes?.year);
                          sessionStorage.setItem(
                            "faculty_number",
                            el?.attributes?.faculty_number
                          );
                          sessionStorage.setItem(
                            "image_url",
                            el?.attributes?.image.data[0].attributes.url
                          );
                        }}
                      >
                        {t("applyBtn")}
                      </button>
                    </Card>
                  </Col>
                );
              })
            ) : (
              <Loader />
            )}
          </Row>
          <Title title={t("Others")} />
          <div className="otherUniversities">
            <Table
              columns={column}
              dataSource={others?.data}
              loading={othersLoading}
              style={{ background: "white" }}
              bordered
            />
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default University;
