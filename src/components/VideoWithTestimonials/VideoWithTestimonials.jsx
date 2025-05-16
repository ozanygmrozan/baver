import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const VideoWithTestimonials = () => {
  const [isOpen, setOpen] = React.useState(false);

  React.useEffect(() => {
    //console.clear();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="block-sec">
      <div
        className="background bg-img pt-100 pb-0 parallaxie"
        style={{
          backgroundImage: `url(https://avatars.mds.yandex.net/i?id=bc80a43d54c6cd6a3863b0b7b41e6437-5666476-images-thumbs&n=13)`,
        }}
        data-overlay-dark="5"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="vid-area">
                <span className="text">Watch Video</span>
                <div className="vid-icon">
                  {typeof window !== "undefined" && (
                    <ModalVideo
                      channel="vimeo"
                      isOpen={isOpen}
                      videoId="127203262"
                      onClose={() => setOpen(false)}
                    />
                  )}
                  <button
                    className="vid"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(true);
                    }}
                  >
                    <div className="vid-butn">
                      <span className="icon">
                        <i className="fas fa-play"></i>
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="testim-box">
                <div className="head-box">
                  <h6 className="wow fadeIn" data-wow-delay=".5s">
                    MÜŞTERİLERİMİZ
                  </h6>
                  <h4 className="wow fadeInLeft" data-wow-delay=".5s">
                    Müşteri Ne Diyor?
                  </h4>
                </div>
                <Slider
                  {...settings}
                  className="slic-item wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="item">
                    <p>
                      Photoshop sanatında ustalaşmamı sağlayan bu harika kaynağı
                      keşfetmek benim için bir dönüm noktasıydı! Her bir eğitim
                      modülü, özenle hazırlanmış içeriği ve adım adım rehberliği
                      ile tasarım yeteneklerimi geliştirmeme yardımcı oldu.
                      Sitedeki içerik, hem başlangıç seviyesindekiler için temel
                      bilgiler sunuyor hem de deneyimli tasarımcılar için ileri
                      seviye teknikleri içeriyor. Ayrıca, grafik tasarım
                      dünyasındaki güncel trendleri takip edebilmek için de
                      harika kaynaklar içeriyor. Bu platform sayesinde,
                      Photoshop'un gücünü tam anlamıyla kavrayarak
                      projelerimdeki yaratıcılığımı zirveye taşıdım. Harika bir
                      deneyim için teşekkürler!
                    </p>
                    <div className="info">
                      <div className="img">
                        <div className="img-box">
                          <img src="/img/clients/1.jpg" alt="" />
                        </div>
                      </div>
                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name ">Ozan Yağmur</h6>
                          <span className="author-details">
                            Co-founder, Colabrio
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <p>
                      Grafik, müşteri memnuniyetinin yüksek olduğunu gösteren
                      net ve anlaşılır bir görsel.
                    </p>
                    <div className="info">
                      <div className="img">
                        <div className="img-box">
                          <img src="/img/clients/2.jpg" alt="" />
                        </div>
                      </div>
                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name ">Alex Regelman</h6>
                          <span className="author-details">
                            Co-founder, Colabrio
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <p>
                      Grafik, müşteri memnuniyetinin 5 üzerinden 4.8 puan ile
                      mükemmel olduğunu gösteriyor. Bu, müşterinin hizmetten çok
                      memnun olduğunun bir göstergesi.
                    </p>
                    <div className="info">
                      <div className="img">
                        <div className="img-box">
                          <img src="/img/clients/3.jpg" alt="" />
                        </div>
                      </div>
                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name ">Alex Regelman</h6>
                          <span className="author-details">
                            Co-founder, Colabrio
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoWithTestimonials;
