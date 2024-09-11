import "./Project.scss";
import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";
import React from "react";
import ProjectSummary from "./ProjectSummary";
import ProjectComments from "./ProjectComments";


function Project() {
  const { id } = useParams(); //find

  const { error, document } = useDocument("projects", id);
  
  
  if (error) {
    return <div className="error">{error}</div>;
  }
  if (!document) {
    return <div className="loading">loading...</div>;
  }
  return (
    <div className="project-details container h-screen bg-blue-500 mx-auto p-5">
      <ProjectSummary project={document} />
      <ProjectComments project={document} />
    
    </div>
  );
}

export default Project;
