import './Promo.css';
import sumbol from'./sumbol.svg';
const Promo = () => {
    return ( 
        <div className="promo col-12 ">
            <div className="container text-center promo__main ">
                <div className="sumbol justify-content-center container d-flex col-12">
                    <img src={sumbol} alt="error" />
                </div>

                <div className="promo__text-container container">
                    <div className="promo__text">
                        <p>Welcome! This web-site is my portfolio.</p>
                        </div>
                </div>
                
                
            </div>
        </div>
     );
}
 
export default Promo;