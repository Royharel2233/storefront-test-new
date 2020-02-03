import React from 'react'
import './style/style.scss'


export const InnerNavBar: React.FC<{}> = ({}) => {
        return <div className="warranty-inner-navbar">
        <ul className="list_none">
          <li className="active">
            <a href="#">WARRANTY</a>
          </li>
          <li>
            <a href="#">SATISFACTION GUARANTEED</a>
          </li>
          <li>
            <a href="#">REPAIR + REPLACEMENT</a>
          </li>
        </ul>
      </div>;
}