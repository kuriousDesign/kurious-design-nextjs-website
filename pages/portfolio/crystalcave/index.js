import ProjectPage from "../../../components/ProjectPage";
import { ProjectId, projectMap } from "../../../copy/ProjectData";


const CrystalCavePage = () => {
    const projectData = projectMap.get(ProjectId.CRYSTALCAVE);
    return (
        <ProjectPage projectData={projectData} />
    );
};

export default CrystalCavePage;
