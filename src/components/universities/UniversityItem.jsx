import "./universityItem.css";
import { Typography } from "antd";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { base_url } from "../../common";
import Footer from "../footer/Footer";

const UniversityItem = () => {
  const { i18n, t } = useTranslation();
  const name_ru = sessionStorage.getItem("name_ru");
  const name_tm = sessionStorage.getItem("name_tm");
  const name_en = sessionStorage.getItem("name_en");
  const description_ru = sessionStorage.getItem("description_ru");
  const description_tm = sessionStorage.getItem("description_tm");
  const description_en = sessionStorage.getItem("description_en");
  const city_ru = sessionStorage.getItem("city_ru");
  const city_en = sessionStorage.getItem("city_en");
  const city_tm = sessionStorage.getItem("city_tm");
  const year = sessionStorage.getItem("year");
  const faculty_number = sessionStorage.getItem("faculty_number");
  const image_url = sessionStorage.getItem("image_url");

  const ulr =
    i18n.language == "tm" || i18n.language == "en"
      ? "https://forms.office.com/r/Wi3GyMt0RY"
      : "https://forms.office.com/r/w9Rkij8mJ2?origin=lprLink";

  return (
    <section className="universityItem">
      <div className="container">
        <div className="university-item">
          <div className="university-img">
            <img src={`${base_url}${image_url}`} alt="university-logo" />
          </div>
          <div className="university-context">
            <h1 className="university-title">
              {i18n.language === "en" && name_en}
              {i18n.language === "ru" && name_ru}
              {i18n.language === "tm" && name_tm}
            </h1>
            <p className="university-text">
              {t("city")}:
              <span style={{ fontWeight: 900, marginLeft: 8 }}>
                {i18n.language === "en" && city_en}
                {i18n.language === "tm" && city_tm}
                {i18n.language === "ru" && city_ru}
              </span>
            </p>
            <p className="university-text">
              {t("faculty")}:
              <span style={{ fontWeight: 900, marginLeft: 8 }}>
                {faculty_number}
              </span>
            </p>
            <p className="university-text">
              {t("foundedIn")}:{" "}
              <span style={{ fontWeight: 900, marginLeft: 8 }}>{year}</span>
            </p>
            <p className="university-text">
              {i18n.language === "ru" && description_ru}
              {i18n.language === "en" && description_en}
              {i18n.language === "tm" && description_tm}
            </p>
            <Link to={ulr} target="_blank" className="outline-btn">
              {t("applyBtn")}
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default UniversityItem;
