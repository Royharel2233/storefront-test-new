
 import React from "react";

 import caret_image from "../../img/caret.png";
 
import placeholder_image from "../../img/Placeholder.png";

import placeholder_image_2 from "../../img/Placeholder2.png";

import placeholder_image_3 from "../../img/Placeholder3.png";

import placeholder_image_9 from "../../img/Placeholder9.png";

import "./collectionMain.scss";


const CollectionMain = () => {
  return (
    <div>
      <div className="CollectionMain">
           <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h2 className="collection_title">collection / 2020</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="latest_fabric">
                    <img
                      src={placeholder_image}
                      alt="Latest Fabric"
                      className="img-fluid d-block mx-auto"
                    />
                    <div className="overlay_content">
                      <h2 className="main_title">
                        Explore Our<br />
                        Latest Fabrics
                      </h2>
                      <p className="content_white">
                        Nullam id dolor id nibh ultricies vehicula ut id elit. Etiam
                        porta sem malesuada magna mollis .
                      </p>
                      <a href="#" className="btn_subscription">View More</a>
                    </div> 
                  </div>
                </div>
                <div className="col-lg-6">
                  <img
                    src={placeholder_image_2}
                    alt="Placeholder2"
                    className="collection_backimg"
                  />
                  <div className="row">
                    <div className="col-sm-6 order-first">
                      <div className="collection_content1 text-sm-right">
                        <h3 className="mini_title">Serenity</h3>
                        <p className="content">
                          Curabitur blandit tempus <br />
                          porttitor.
                        </p>
                        <a href="#" className="link"
                          ><img src={caret_image} alt="SHOP NOW" />SHOP NOW</a
                        >
                      </div>
                    </div>
                    <div className="col-sm-6 order-last">
                      <img
                        src={placeholder_image_9}
                        alt="Placeholder9"
                        className="img-fluid ml-auto mr-20 d-block"
                      />
                    </div>
                  </div>
                  <div className="row mt-50">
                      <div className="col-sm-6">
                          <img src={placeholder_image_3} alt="Placeholder3" className="img-fluid ml-auto d-block" />
                      </div>
                    <div className="col-sm-6">
                      <div className="collection_content2 ml-20">
                        <h3 className="mini_title">Jade</h3>
                        <p className="content">
                          Curabitur blandit tempus <br />
                          porttitor.
                        </p>
                        <a href="#" className="link"
                          ><img src={caret_image} alt="SHOP NOW" />SHOP NOW</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
)};

export default CollectionMain;