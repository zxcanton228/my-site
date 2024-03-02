import {allProjects} from '../../../data';
import { Link, useParams } from "react-router-dom";

import "./ProjectsDatails.css";


const ProjectsDetails = () => {
    const {id} = useParams();
    const project = allProjects[id-1];

    console.log(project);
    const {img, languages, title} = project;
    return ( 
        <div id="main" className="main container text-center">
            <img src={`./../img/${img}`} alt={title} className="project__img" />
            <div className="project__txt w-100">
                <h1 className="skils__title">{title}</h1>
                <p className="skils__text">{languages}</p>
                <button className="btn github"><i className="bi bi-github"></i>GitHub</button>
            </div>
        </div>
     );
}
 
export default ProjectsDetails;