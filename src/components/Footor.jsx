import React from "react";
import appData from "../data/app.json";
import { Link } from "react-router-dom";

const Footer = ({ hideBGCOLOR }) => {
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Bize Ulaşın</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Ofis Adresi</h6>
                    <p>
                      Şerefiye MAH. HASTANE 2. CAD. DÜNYA İS MERKEZİ NO: 22 İÇ
                      KAPI NO:11 IPEKYOLU/VAN Tel: 05412549643{" "}
                    </p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Bize e-posta gönderin</h6>
                    <p>asgardmedyaq@gmail.com</p>- 
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Bizi Arayın</h6>
                    <p>+05423314515</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
              </div>
              <ul>
                <li>
                  <div className="img">
                    <Link to="/blog-details/blog-details-dark">
                      <img src="/img/blog/1.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link to="/blog-details/blog-details-dark">
                      <p>
                        Başlangıç Rehberi: Grafik Günlüğünüzü Oluşturmanın
                        Mükemmel Kılavuzu.
                      </p>
                    </Link>
                    <Link to="/blog/blog-dark">
                      <span className="date">14 Eyl 2024</span>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="img">
                    <Link to="/blog-details/blog-details-dark">
                      <img src="/img/blog/2.jpg" alt="" />
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="subscribe">
                    <input
                      type="text"
                      placeholder="
E-postanızı Yazın"
                    />
                    <span className="subs pe-7s-paper-plane"></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src={appData.lightLogo} alt="" />
              </div>
              <div className="social">
                <a href="https://www.instagram.com/asgardmedyaa/">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
              <div className="copy-right">
                <p>
                  © 2022, Vie Şablonu. Tutkuyla yapılmış.
                  <Link
                    to="https://themeforest.net/user/themescamp/portfolio"
                    target="_blank"
                  ></Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
