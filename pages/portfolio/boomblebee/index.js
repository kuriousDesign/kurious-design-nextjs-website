import ProjectPage from "../../../components/ProjectPage";
import { ProjectId, projectMap } from "../../../copy/ProjectData";


const BoombleBeePage = () => {
    const projectData = projectMap.get(ProjectId.BOOMBLEBEE);
    return (
        <ProjectPage projectData={projectData} />
    );
};

export default BoombleBeePage;
