import React from "react";

import { FabricFilter } from "./FabricFilter";
import { FabricGallery } from "./FabricGallery";
import { FabricMenu } from './FabricMenu'
import { FabricPopUp } from "./FabricPopUp";

import { PageHeader } from './PageHeader'

import './style/style.scss'

export const ShopFabric: React.FC<{}> = () => {
    return (
        <>
            <div className="shop-fabric w-1239">
                <div>
                    <PageHeader />
                </div>
                <div>
                    <FabricMenu />
                </div>
                <div>
                    <FabricFilter />
                </div>
                <div>
                    <FabricGallery />
                </div>
                <div>
                    <FabricPopUp />
                </div>
            </div>
        </>
    );
};
