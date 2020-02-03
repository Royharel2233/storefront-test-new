import React from "react";
import  {DashBoardNav}  from "./DashBoardNav";
import { ProjectComplete } from "./ProjectComplete";
import { SingleProject } from "./SingleProject/SingleProject";
import './style/style.scss'

export const DashBoardHome: React.FC<{}> = () => {
    return (
        <div className="project-center w-1239">
            <h2 className="normal">Welcome back, Tony</h2>
                <DashBoardNav />
            <div className="projects-wrraper">
                <div>
                    <SingleProject />
                </div>
                <div>
                    <ProjectComplete />
                </div>
            </div>
        </div>
    );
};
