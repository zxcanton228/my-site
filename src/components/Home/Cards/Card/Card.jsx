import { Link } from "react-router-dom";
import './Card.css'
const Card = ({crd}) => {
    return ( 
        <Link to={`/Project/${crd.id}`}>
            <div className="card" title={crd.title}>
                <img src={`/img/${crd.img}`} alt="err" />
                <div className="card__text justify-content-center aling-items-center">
                    <h1>{crd.title}</h1>
                </div>
            </div>
        </Link>
     );
}
 
export default Card;