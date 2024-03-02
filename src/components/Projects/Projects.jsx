import Project from "./Project/Project";
import './Projects.css';
import {allProjects} from "./../../data";
const Projects = () => {

    return ( 
        <section className="content col-12 d-flex justify-content-center align-items-center">
            <div  className="main container text-center">
                <div className="projects">
                    {
                        allProjects.map(proj => {
                            return(
                                <Project proj={proj} key={proj.id}/>
                            );
                        })
                    }
                    
                </div>
                <h1 className="noMore">No more...</h1>

            </div>
        </section>
     );
}
 
export default Projects;