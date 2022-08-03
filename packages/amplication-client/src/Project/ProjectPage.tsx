import React from "react";
import ResourceList from "../Workspaces/ResourceList";
import "./ProjectPage.scss";
import ProjectSideBar from "./ProjectSideBar";
import { AppRouteProps } from "../routes/routesUtil";
import { match } from "react-router-dom";

type Props = AppRouteProps & {
  match: match<{
    workspace: string;
    project: string;
  }>;
};

const ProjectPage: React.FC<Props> = ({ innerRoutes, match, moduleClass }) => {
  return (
    <div className={moduleClass}>
      {match.isExact ? (
        <>
          <div className={`${moduleClass}__sidebar`}>
            <div className={`${moduleClass}__sidebar-content`}>
              <ProjectSideBar />
            </div>
          </div>
          <div className={`${moduleClass}__content`}>
            <ResourceList />
          </div>
        </>
      ) : (
        innerRoutes
      )}
    </div>
  );
};

export default ProjectPage;