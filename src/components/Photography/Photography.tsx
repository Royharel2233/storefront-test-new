import React from 'react'

import './styles/style.scss'

import photography from '../../img/photography.png'

export const Photography: React.FC<{}> = ({}) => {
        return <div id="photography">
        <div className="container">
            <div className="auth-title w-100">
                <h1 className="h1-auth-title">Photography</h1>
                <p className="txt-auth-title">
                    Cras mattis consectetur purus sit amet fermentum.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                    Nullam id dolor id nibh ultricies vehicula ut id elit.
                </p>
            </div>
            <div className="row photography-block">
                <div className="col-md-6">
                    <div className="photography-image-block">
                        <div className="small-gray-background"></div>
                        <img src={photography}/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="photography-text-block">
                        <h2>Photography</h2>
                        <p>
                            Nullam quis risus eget urna mollis ornare vel eu leo.
                            Nulla vitae elit libero, a pharetra augue.
                        </p>
                        <a className="link-btn ">
                            CONTACT US
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}