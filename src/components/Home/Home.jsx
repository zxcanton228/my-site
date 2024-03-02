import Cards from './Cards/Cards';
import './Home.css';
import Promo from './Promo/Promo';

const Home = () => {
    return ( 
        <>
            <Promo />

            <div className="content col-12 d-flex justify-content-center">
                <div className="content__wrapper">
                    <div className="project__title text-center">
                        <h1>My Projects</h1>
                    </div>
                    <Cards />
                </div>
            </div>
        </>
        
    );
}
 
export default Home;