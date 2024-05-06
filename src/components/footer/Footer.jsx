import React from "react";
import "./footer.css";
import { useTranslation } from "react-i18next";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { Col, Row } from "antd";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-logo">
            <div>
              <div className="footer-logo">
                <div className="name">
                  <h1>NooN Consulting</h1>
                  <span className="">Study in China</span>
                </div>
                <div>
                  <MdLocationOn
                    style={{
                      width: "60px",
                      height: "60px",
                      marginTop: "-10px",
                    }}
                  />
                  <div className="address" style={{ textAlign: "justify" }}>
                    {/* <p>
                      <span>G.Kulyýew</span> (obýeznoý)
                    </p>
                    <p>
                      <span>Gujurly ýaşlar</span> bina
                    </p> */}
                    <p>
                      Zone C, Binwang Market, Choucheng Street, Yiwu City,
                      Zheijang Province, China 081.082.083
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="link">
            <h3>{t("Explore")}</h3>
            <ul>
              <li>{t("AboutUs")}</li>
              <li>{t("Services")}</li>
              <li>{t("universities")}</li>
              <li>{t("Contacts")}</li>
            </ul>
          </div>
          <div className="link">
            <h3>{t("universityIn")}</h3>
            <ul>
              <li>{t("Pekin")}</li>
              <li>{t("Shanghai")}</li>
              <li>{t("Guangzhou")}</li>
              <li>{t("Others")}</li>
            </ul>
          </div>
          <div className="link">
            <h3>{t("Contacts")}</h3>
            <ul>
              <li>
                <a
                  href="https://www.tiktok.com/@user7406615703171"
                  target="_blank"
                >
                  <FaTiktok className="fIcon" /> Noon consulting
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/maslahatnur?igsh=cDNka3JidWpiODdq"
                  target="_blank"
                >
                  <FaInstagram className="fIcon" /> Nur maslahat
                </a>
              </li>
              <li>
                <a href="tel:+8613079909963">+86 130 7990 9963</a>
              </li>
              <li>
                <a href="tel:+8613209900101">+86 132 0990 0101</a>
              </li>
              <li>
                <a href="mailto:nooncslt@gmail.com">nooncslt@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>© 2024 NooN Consulting. {t("rights")}</p>
      </div>
    </>
  );
};

export default Footer;
