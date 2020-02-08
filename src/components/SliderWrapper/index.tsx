import React from "react";

import "./css/bootstrap.css";

import "./index.scss";

import banner_two from "./img/100x50_cb52a-banner-02.jpg";

import caret_image from "./img/caret.png";

import image from "./img/Image.png";

import thumb_asset from "./img/100x50_02ca2-banner-01.jpg";




class SliderWrapper extends React.Component {
    componentDidMount(){
        (function ($) {
            /* tslint:disable:no-string-literal */
            const tpj = window["jQuery"];
            /* tslint:enable:no-string-literal */
            tpj(document).ready(function () {
                if (tpj("#rev_slider_8_1").revolution === undefined) {
                    // revslider_showDoubleJqueryError("#rev_slider_8_1");
                } else {
                    tpj("#rev_slider_8_1").show().revolution({
                        sliderType: "standard",
                        sliderLayout: "fullwidth",
                        dottedOverlay: "none",
                        delay: 9000,
                        navigation: {
                             keyboardNavigation: "off",
                            keyboard_direction: "horizontal",
                            mouseScrollNavigation: "off",
                            mouseScrollReverse: "default",
                            onHoverStop: "off",
                            bullets: {
                                enable: true,
                                hide_onmobile: false,
                                style: "hermes",
                                hide_onleave: false,
                                direction: "horizontal",
                                h_align: "center",
                                v_align: "bottom",
                                h_offset: 0,
                                v_offset: 50,
                                space: 10,
                                tmp: "",
                            },
                        },
                        visibilityLevels: [1240, 1024, 778, 480],
                        gridwidth: 1270,
                        gridheight: 960,
                        lazyType: "none",
                        shadow: 0,
                        spinner: "spinner3",
                        stopLoop: "off",
                        stopAfterLoops: -1,
                        stopAtSlide: -1,
                        shuffle: "off",
                        autoHeight: "off",
                        disableProgressBar: "on",
                        hideThumbsOnMobile: "off",
                        hideSliderAtLimit: 0,
                        hideCaptionAtLimit: 0,
                        hideAllCaptionAtLilmit: 0,
                        debugMode: false,
                        fallbacks: {
                            simplifyAll: "off",
                            nextSlideOnWindowFocus: "off",
                            disableFocusListener: false,
                        },
                    });
                }
            });
        })
        /* tslint:disable:no-string-literal */
        (window["jQuery"]);
        /* tslint:enable:no-string-literal */
    }
    render(){
        return (
        <div className="SliderWrapper">
            <div id="rev_slider_8_1_wrapper" className="rev_slider_wrapper fullwidthbanner-container" data-alias="car-dealer-06"
                        data-source="gallery"
                        style={{margin:'0px auto', backgroundColor:'transparent', padding:'0px', marginTop:'0px', marginBottom:'0px'}}>
                        {/* START REVOLUTION SLIDER 5.3.0.2 fullwidth mode   */}
                        <div id="rev_slider_8_1" className="rev_slider fullwidthabanner" style={{display:'none'}} data-version="5.3.0.2">
                            <ul>
                                {/* SLIDE    */}
                                <li data-index="rs-12" data-transition="fade" data-slotamount="default" data-hideafterloop="0"
                                    data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="300"
                                    data-thumb={thumb_asset} data-rotate="0" data-saveperformance="off"
                                    data-title="Slide" data-param1="" data-param2="" data-param3="" data-param4="" data-param5=""
                                    data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
                                    {/* MAIN IMAGE   */}
                                    <img src={image} alt="" data-bgposition="center center"
                                        data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" data-no-retina/>
                                    {/* LAYERS   */}

                                    {/* LAYER NR. 2   */}
                                    <div className="tp-caption tp-resizeme main_title" data-x="165" data-y="center"
                                        data-voffset="-150" data-width="['auto']" data-height="['auto']" data-type="text"
                                        data-responsive_offset="on"
                                        data-frames='[{"delay":200,"speed":1000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                        >
                                        Designer<br/>
                                        Shades </div>

                                    {/* LAYER NR. 3   */}
                                    <div className="tp-caption tp-resizeme italic_line" data-x="165" data-y="center"
                                        data-voffset="-40" data-width="['auto']" data-height="['auto']" data-type="text"
                                        data-responsive_offset="on"
                                        data-frames='[{"delay":1500,"speed":1000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                        >
                                    Summer Editonal </div>

                                    {/* LAYER NR. 5   */}
                                    <div className="tp-caption link_parent" data-x="165" data-y="center" data-voffset="0"
                                        data-width="['auto']" data-height="['auto']" data-type="button" data-responsive_offset="on"
                                        data-frames='[{"delay":2800,"speed":1000,"frame":"0","from":"x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"300","ease":"Linear.easeNone","force":true,"to":"o:1;rX:0;rY:0;rZ:0;z:0;"}]'
                                    >
                                        <a href="#" className="link-long"><img src={caret_image} alt="LEARN More"/>LEARN More</a></div>
                                </li>   


                                
                                {/* SLIDE    */}
                                <li data-index="rs-13" data-transition="fade" data-slotamount="default" data-hideafterloop="0"
                                    data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="300"
                                    data-thumb={banner_two} data-rotate="0" data-saveperformance="off"
                                    data-title="Slide" data-param1="" data-param2="" data-param3="" data-param4="" data-param5=""
                                    data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
                                    {/* MAIN IMAGE   */}
                                    <img src={image} alt="" data-bgposition="center center"
                                        data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" data-no-retina/>
                                    {/* LAYERS   */}

                                {/* LAYER NR. 2   */}
                                <div className="tp-caption tp-resizeme main_title" data-x="165" data-y="center" data-voffset="-150" data-width="['auto']"
                                    data-height="['auto']" data-type="text" data-responsive_offset="on"
                                    data-frames='[{"delay":200,"speed":1000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'>
                                    Designer<br/>
                                    Shades </div>
                                
                                {/* LAYER NR. 3   */}
                                <div className="tp-caption tp-resizeme italic_line" data-x="165" data-y="center" data-voffset="-40" data-width="['auto']"
                                    data-height="['auto']" data-type="text" data-responsive_offset="on"
                                    data-frames='[{"delay":1500,"speed":1000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'>
                                    Winter Editonal </div>
                                
                                {/* LAYER NR. 5   */}
                                <div className="tp-caption link_parent" data-x="165" data-y="center" data-voffset="0" data-width="['auto']"
                                    data-height="['auto']" data-type="button" data-responsive_offset="on"
                                    data-frames='[{"delay":2800,"speed":1000,"frame":"0","from":"x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"300","ease":"Linear.easeNone","force":true,"to":"o:1;rX:0;rY:0;rZ:0;z:0;"}]'>
                                    <a href="#" className="link"><img src={caret_image} alt="LEARN More"/>LEARN More</a></div>
                                </li>
                            </ul>
                            <div className="tp-bannertimer tp-bottom" style={{visibility: "hidden"}}></div>
                        </div>
                    </div>
                </div>
                )
                
            };
        }
export default SliderWrapper;