import React from "react"
import styles from "./Navbar.module.css"
import { Link } from "react-router-dom"



function Navbar() {
  return (
    <nav className={`navbar navbar-expand-lg .bg-black-transparent ${styles.bgc}`}>
      <div className={`container ${styles.bgc} ${styles.clr}`}>
        <div className="navbar-brand">
          <Link className="nav-link active" aria-current="page" to="/" >
            <img src="/assets/imgs/logo.png" style={{ width: "120px", marginRight: "auto" }} alt='' />
          </Link>

        </div>


        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className={`btn btn-primary ${styles.btn}`}>
              <img src="/assets/imgs/deli.png" style={{ width: "20px" }} alt="" />
              <h6>DELIVERY</h6>
            </button>
            <button type="button" className={`btn btn-primary ${styles.btn}`}>
              <img src="/assets/imgs/pick.png" style={{ width: "20px" }} alt="" />
              <h6>PICKUP</h6>
            </button>

          </div>


          <div className={`bucket ${styles.buck} ${styles.buckdiv}`}>
            <img src="/assets/imgs/bucket2.png" style={{ width: "33px", marginLeft:"30px" }} alt='' />
          </div>



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