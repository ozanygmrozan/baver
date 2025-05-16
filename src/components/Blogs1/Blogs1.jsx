import React from "react";
import { Link } from "react-router-dom";

const Blogs1 = () => {
  return (
    <section className="blog section-padding sub-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s"></h6>
              <h3 className="wow color-font">Grafik Tasarım.</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="item md-mb50 wow fadeInUp" data-wow-delay=".3s">
              <div className="img">
                <img src="/img/blog/1.jpg" alt="" />
              </div>
              <div className="cont">
                <div>
                  <div className="info">
                    <Link to="/blog/blog-dark" className="date">
                      <span></span>
                    </Link>
                    <span>/</span>
                    <Link to="/blog/blog-dark" className="tag"></Link>
                  </div>
                  <h5>
                    <Link to="/blog-details/blog-details-dark">
                      Bir kitap kapağı, potansiyel okuyucuları üzerinde ilk
                      izlenimi yaratır. Bu nedenle kitap kapağı tasarımı bir
                      kitabın pazarlanmasının en önemli yönlerinden biridir.
                    </Link>
                  </h5>
                  <div className="btn-more">
                    <Link
                      to="/blog-details/blog-details-dark"
                      className="simple-btn"
                    ></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="item md-mb50 wow fadeInUp" data-wow-delay=".5s">
              <div className="img">
                <img src="/img/blog/2.jpg" alt="" />
              </div>
              <div className="cont">
                <div>
                  <div className="info">
                    <Link to="/blog/blog-dark" className="date">
                      <span>
                      </span>
                    </Link>
                    <span>/</span>
                    <Link to="/blog/blog-dark" className="tag">
                    </Link>
                  </div>
                  <h5>
                    <Link to="/blog-details/blog-details-dark">
                      RGB, web siteleri hatta televizyon gibi dijital iletişim
                      ögelerini tasarlamak için kullanılır. CMYK ise baskıya
                      yönelik tüm tasarımlarda kullandığımız moddur.
                    </Link>
                  </h5>
                  <div className="btn-more">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs1;
