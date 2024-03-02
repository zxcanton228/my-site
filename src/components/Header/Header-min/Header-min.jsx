// import './Header-min.css';
import { Link } from "react-router-dom";
const Header__min = () => {
    return ( 
        <div className="header__min d-xxl-none d-xl-none d-lg-none d-md-none d-block">
            <button className="btn btn-outline-light col-12 header__nav__min__btn  d-xxl-none d-xl-none d-lg-none d-md-none d-block" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                меню
            </button>
        
        
            <div className="collapse" id="collapseExample">
                <div className="card-min card-body">
                    <ul className="text-center min__ul">
                        
                        <li><Link to="/projects">projects</Link></li>
                        <li><Link to="/contacts">contacts</Link></li>
                        <li><Link to="/skils">skils</Link></li>              
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Header__min;