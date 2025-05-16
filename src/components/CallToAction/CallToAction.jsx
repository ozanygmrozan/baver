import React from "react";
import Split from "../../Common/Split/index";
import { Link } from "react-router-dom";

const CallToAction = ({ img }) => {
  return (
    <section
      className="call-action section-padding sub-bg bg-img"
      style={{ backgroundImage: `url(${img ? img : "/img/patrn.svg"})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-9">
            <div className="content sm-mb30">
              <Split>
                <h6 className="wow words chars splitting" data-splitting>
                  HADİ KONUŞALIM
                </h6>
                <h2 className="wow words chars splitting" data-splitting>
                 <br /> <b className="back-color">SIRADAKİ PROJE</b>
                  .
                </h2>
              </Split>
            </div>
          </div>

          <div className="col-md-4 col-lg-3 valign">
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
