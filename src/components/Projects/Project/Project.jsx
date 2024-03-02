import { Link } from "react-router-dom";
import "./Project.css";

const Project = ({proj}) => {
    return ( 
        <Link to={`/Project/${proj.id}`}>
            <div className="projects__element" >
                <img className="projects__img" src={`./img/${proj.img}`} alt={proj.title} />
            </div>
        </Link>
     );
}
 
export default Project;