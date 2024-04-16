import React from "react";
import "./about.css";
import { homeAbout } from "../../common";
import Title from "../common/title/Title";
import Awrapper from "./Awrapper";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const AboutCard = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
      <section className="aboutHome">
        <div className="container flexSB">
          <div className="left row">
            <img src="./images/about.webp" alt="" />
          </div>
          <div className="right row">
            <Title title={t("sEveryThing")} subtitle={t("sAnyDegree")} />
            <div className="items">
              {homeAbout.map((val) => {
                return (
                  <div
                    className="item flexSB"
                    key={val.id}
                    onClick={() => navigate("/universities")}
                  >
                    <div className="img">
                      <img src={val.cover} alt="programLogo" />
                    </div>
                    <div className="text">
                      <h2>{t(val.title)}</h2>
                      <p>{t(val.desc)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Awrapper />
    </>
  );
};

export default AboutCard;
