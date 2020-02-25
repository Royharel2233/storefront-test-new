import React, { useState } from "react";


import "./index.scss";

import brush from "./img/BrushLogo.png";

import brush_black from "../../images/change_color_black.svg";

import edit from "./img/EditLogo.png";

import edit_black from "../../images/change_setting_black.svg";


import print from "./img/PrintLogo.png";

import ChangeWallColor from "./ChangeWallColor"

import ChangeSettingType from "./ChangeSettingType"


interface LeftSideProps {
  printOutFunc: any;
  current_shade: string;
  setNewShade: (shadeName: string) => void;
  opacity: number;
  changeRightSideOpacity: (opactiy: number) => void;
  changeLeftSideOpacity: (opactiy: number) => void;
}



const BuildMyShadeLeftSide: React.FC<LeftSideProps> =
  ({
    printOutFunc,
    current_shade,
    setNewShade,
    opacity,
    changeRightSideOpacity,
    changeLeftSideOpacity }) => {

    const [isColorHidden, setIsColorHidden] = useState(true)
    const [isSettingHidden, setIsSettingHidden] = useState(true)
    const [changeColorActive, setChangeColorActive] = useState("absolute-icons")
    // const [backgroundColor, setBackgroundColor] = useState()
    const [blackButtonChangeColor, setBlackButtonBackground] = useState(brush)
    const [blackButtonChangeSetting, setBlackButtonBackgroundSetting] = useState(edit)

    const printAction = () => {
      window.focus()
      window.print()
    }
    const clickColorChange = () => {
      setBlackButtonBackgroundSetting(edit)
      setBlackButtonBackground(brush_black)
      setIsColorHidden(false)
      setIsSettingHidden(true)
      setChangeColorActive("absolute-icons change-color-onclick")
      changeLeftSideOpacity(1.0)
      changeRightSideOpacity(.25)
    }
    const clickChangeSetting = () => {
      setBlackButtonBackground(brush)
      setBlackButtonBackgroundSetting(edit_black)
      setIsColorHidden(true)
      setIsSettingHidden(false)
      setChangeColorActive("absolute-icons change-setting-onclick")
      changeLeftSideOpacity(1.0)
      changeRightSideOpacity(.25)

    }
    const CloseAllAction = () => {
      setIsColorHidden(true)
      setIsSettingHidden(true)
      setChangeColorActive("absolute-icons")
      setBlackButtonBackgroundSetting(edit)
      setBlackButtonBackground(brush)
      changeRightSideOpacity(1.0)
    }


    return (
      <div className="build-shade-left-side" style={{
        width: "800px",
        maxWidth: "800px",
        position: "relative",
        background: `url(${current_shade})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        height: "980px",
        opacity,
      }}
      >
        <div className={changeColorActive} style={{ zIndex: 2 }} >
          <button className={"color_button"} onClick={clickColorChange} ><img src={blackButtonChangeColor} /></button>
          <button className={"change_button"} onClick={clickChangeSetting}><img src={blackButtonChangeSetting} /></button>
          <button className="print_button" onClick={printAction}><img src={print} /></button>
        </div>
        {isColorHidden === false && isSettingHidden === true
          ? <ChangeWallColor closeOnClick={CloseAllAction} />
          : <div></div>
        }

        {isColorHidden === true && isSettingHidden === false
          ?
          <ChangeSettingType
            closeOnClick={CloseAllAction}
            ChangeBackground={setNewShade}
          />
          :
          <div></div>
        }
      </div>
    );
  }
export default BuildMyShadeLeftSide;
