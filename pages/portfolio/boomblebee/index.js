import ProjectPage from "../../../components/ProjectPage";
import { ProjectId, projectMap } from "../../../copy/ProjectData";
import { slides } from "./slides";


const BoombleBeePage = () => {
    const projectData = projectMap.get(ProjectId.BOOMBLEBEE);
    return (
        <ProjectPage projectData={projectData} slides={slides} />
    );
};

export default BoombleBeePage;
