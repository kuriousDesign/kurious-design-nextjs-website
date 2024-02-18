import ProjectPage from "../../../components/ProjectPage";
import { ProjectId, projectMap } from "../../../copy/ProjectData";


const StreetArtMuralePage = () => {
    const projectData = projectMap.get(ProjectId.STREETARTMURALE);
    return (
        <ProjectPage projectData={projectData} />
    );
};

export default StreetArtMuralePage;
