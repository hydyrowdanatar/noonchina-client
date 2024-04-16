import React from "react";
import "./hero.css";
import Title from "../../common/title/Title";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Title title={t("welcome")} subtitle={t("best")} />
            <p>{t("we")}</p>
            <div className="">
              <button
                className="primary-btn "
                onClick={() => navigate("/universities")}
              >
                {t("startBtn")}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
