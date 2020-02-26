import React from "react";

import "./index.scss";

// import "./css/bootstrap.css";
// import "./css/style.css";

import facebook_small from "./img/FacebookSmall.svg";

import instagrem_small from "./img/instagramsmall.svg";

import pintrest_small from "./img/PinterestSmall.svg";

import houzz_small from "./img/HouzzSmall.svg";

import youtube_small from "./img/YoutubeSmall.svg";

const SocialMediaMain: React.FC = () => (
        <div className="SocialMediaMain">
            <ul className="list-unstyled social_media">
                        <li>Follow Us</li>
                        <li>
                            <a href="https://www.facebook.com/LuXoutShades/"><img src={facebook_small} className="img-fluid d-block mx-auto" alt="Facebook" /></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/luxoutshades/"><img src={instagrem_small} className="img-fluid d-block mx-auto" alt="Instagram" /></a>
                        </li>
                        <li>
                            <a href="https://www.pinterest.com/search/pins/?q=luxout%20shades"><img src={pintrest_small} className="img-fluid d-block mx-auto" alt="Pinterest" /></a>
                        </li>
                        <li>
                            <a href="https://www.houzz.com/professionals/window-treatments/luxout-shades-pfvwus-pf~1419787701"><img src={houzz_small} className="img-fluid d-block mx-auto" alt="Houzz" /></a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/channel/UCaqqsXVBCDjXcQBhe0J8Sjg"><img src={youtube_small} className="img-fluid d-block mx-auto" alt="Youtube" /></a>
                        </li>
                    </ul>
              </div>
              )
export default SocialMediaMain;
