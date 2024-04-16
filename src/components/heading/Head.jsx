import React from "react";
import { changeLanguage } from "../../common";
import { useTranslation } from "react-i18next";

const Head = () => {
  const { i18n } = useTranslation();
  return (
    <>
      <section className="head">
        <div className="container flexSB">
          <div className="logo">
            <h1>NooN Consulting</h1>
            <span>Study in China</span>
          </div>

          <div className="social ">
            <div
              className="icon"
              onClick={() => changeLanguage("tm")}
              style={{
                background: i18n.language == "tm" && "#1eb2a6",
                color: i18n.language == "tm" && "#fff",
              }}
            >
              TM
            </div>
            <div
              className="icon"
              onClick={() => changeLanguage("ru")}
              style={{
                background: i18n.language == "ru" && "#1eb2a6",
                color: i18n.language == "ru" && "#fff",
              }}
            >
              RU
            </div>
            <div
              className="icon"
              onClick={() => changeLanguage("en")}
              style={{
                background: i18n.language == "en" && "#1eb2a6",
                color: i18n.language == "en" && "#fff",
              }}
            >
              EN
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
