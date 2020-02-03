import React from 'react'
import './style/style.scss'


export const FabricMenu: React.FC<{}> = ({}) => {
        return <div className="shop-fabric-menu">
        <ul className="list_none">
            <li className="active">
                <a href="#">
                    <span>LUXSHADE</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span>LUXSHADE SOLAR</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span>DOUBLE ROLLER</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span>SLIMLINE DUAL</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span>LUXSHADE LARGE DUAL</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span>COUPLE LUXSHADE</span>
                </a>
            </li>
        </ul>
    </div>;
}