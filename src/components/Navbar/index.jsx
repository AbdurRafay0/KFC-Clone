import React from "react"
import styles from "./Navbar.module.css"
import { Link } from "react-router-dom"



function Navbar() {
  return (

    <nav className={`navbar navbar-expand-lg .bg-black ${styles.bgc}`}>
      <div className={`container ${styles.bgc} ${styles.clr}`}>
        <div className="navbar-brand">
          <Link className="nav-link active" aria-current="page" to="/" >
            <img src="/assets/imgs/logo.png" style={{ width: "120px", marginRight: "auto" }} alt='' />
          </Link>

        </div>

        <div className={`btns ${styles.btns}`}>

          <button type="button" className={`btn btn-primary ${styles.btn}`}>
            <img src="/assets/imgs/deli.png" style={{ width: "20px" }} alt="" />
            <h6>DELIVERY</h6>
          </button>
          <button type="button" className={`btn btn-primary ${styles.btn1}`}>
            <img src="/assets/imgs/pick.png" style={{ width: "20px" }} alt="" />
            <h6>PICKUP</h6>
          </button>


        </div>
        <button className={`location ${styles.location}`}>
          <img src="/assets/imgs/location.png" style={{ width: "20px", height: "20px", marginTop: "5px" }} alt="" />
          <h6 className={`head ${styles.loch6}`}>Select Location</h6>
        </button>




        <div className={`bucket ${styles.buck} ${styles.buckdiv}`}>

          <img src="/assets/imgs/bucket2.png" style={{ width: "33px", marginLeft: "20px", }} alt='' />

        </div>




        <Link className="nav-link active" aria-current="page" to="/Register-Signin" >
          <button className={`btn btn-primary ${styles.btnsign}`} type="submit">
            <h6>Register / Sign in</h6>
          </button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar