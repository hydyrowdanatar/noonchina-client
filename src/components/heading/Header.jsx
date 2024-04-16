import React, { useState } from "react";
import Head from "./Head";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [click, setClick] = useState();
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <>
      <Head />
      <header>
        <nav className="flexSB">
          <ul
            className={click ? "mobile-nav" : "flexSB"}
            onClick={() => setClick(false)}
          >
            <li>
              <a onClick={() => navigate("/")}>{t("home_page")}</a>
            </li>
            <li>
              <a onClick={() => navigate("/universities")}>
                {t("universities")}
              </a>
            </li>
          </ul>
          <div className="start">
            <a
              href="https://forms.office.com/r/Wi3GyMt0RY"
              target="_blank"
              className="button"
            >
              {t("applyBtn")}
            </a>
          </div>
          <button className="toggle menu" onClick={() => setClick(!click)}>
            {click ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
