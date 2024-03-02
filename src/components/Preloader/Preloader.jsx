import './Preloader.css'
const Preloader = () => {
    document.body.onload = function(){
        setTimeout(function(){
            var preloader = document.querySelector('.preloader')
            if(!preloader.classList.contains('done')){
                preloader.classList.add('done')
            }
        })
    }
    return ( 
        <div className="preloader">
          <div className="spinner-border text-light loader" role="status"></div>
        </div>
     );
}
 
export default Preloader;