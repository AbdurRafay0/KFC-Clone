// import slide1 from "../assets/imgs/slide1.jpg"
// import slide2 from "../assets/imgs/slide2.jpg"
// import slide3 from "../assets/imgs/slide3.png"
import styles from "./Slider.module.css"


function Slider(){
    return(
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
      <div className={`carousel-inner ${styles.slide}`}>
        <div className="carousel-item active">
          <img src="/assets/imgs/slide1.jpg" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="/assets/imgs/slide2.jpg" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="/assets/imgs/slide3.png" className="d-block w-100" alt="..."/>
        </div>
      </div>
    </div>
    )
}

export default Slider