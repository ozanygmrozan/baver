import React from "react";
import { Link } from "react-router-dom";

const Intro2 = ({ sliderRef }) => {
  return (
    <header ref={sliderRef} className="slider-st valign position-re">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="cont md-mb50">
              <div className="sub-title mb-5">
                <h6>Hizmetlerimiz</h6>
              </div>
              <h1 className="mb-10 fw-600">Kurumsal Kimlik Tasarımı</h1>
              <p>
                Bir markanın hedef kitle ile net bir şekilde iletişim kurmaya
                çalıştığı kurumsal kimlik tasarımıdır. Kurumsal kimlik, marka
                adı, logo, stil ve görseller aracılığıyla iletilen Birleşik
                mesajdır. Kurumsal kimlik marka imajından farklıdır. 'Marka
                kimliği', markanın kendisi tarafından - tüketicilere güçlü bir
                mesaj yayınlamak amacıyla - marka imajının pazarda oluşan Özet
                görüş olduğu yerde inşa edilir.
              </p>
              <Link to={`/about/about-dark`} className="butn bord curve mt-30">
                <span>Anasayfa</span>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img">
              <img src="/img/slid/001.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="line bottom left"></div>
    </header>
  );
};

export default Intro2;
