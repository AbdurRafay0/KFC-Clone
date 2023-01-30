import React from "react"
import styles from "./Footer.module.css"
import { Link } from "react-router-dom"


function Footer() {
    return (
        <div className={`footer ${styles.footer}`}>

            <div className={`footimg ${styles.footimg}`}>

                <div className={`line ${styles.line}`}>
                    <Link className="nav-link active" aria-current="page" to="/" >
                        <img src="/assets/imgs/logo.png" style={{ width: "150px", marginLeft: "2px" }} alt='' />
                    </Link>
                </div>
                <div>
                    <div><h6 className={`find ${styles.find}`}>find us on</h6></div>
                    <img src="/assets/imgs/youtube.png" style={{ width: "50px", height: "40px", marginTop: "10px", borderRadius: "50%", marginLeft: "20px" }} alt='' />
                    <img src="/assets/imgs/insta.jpeg" style={{ width: "50px", height: "40px", marginTop: "10px", borderRadius: "50%", marginLeft: "10px" }} alt='' />
                    <img src="/assets/imgs/fb.png" style={{ width: "50px", height: "40px", marginTop: "10px", borderRadius: "50%", marginLeft: "10px" }} alt='' />

                </div>

            </div>

            <div className={`foo ${styles.foo}`}>


                <table className={`table ${styles.table}`}>
                    <thead>
                        <tr>

                            <th className={`td ${styles.td}`} >
                                <button className={`btn ${styles.btn1}`}><h5>information</h5></button>
                            </th>

                            <th className={`td ${styles.td}`} ><button className={`btn ${styles.btn1}`}><h5>Locations</h5></button></th>
                            <th className={`td ${styles.td}`}><button className={`btn ${styles.btn1}`}><h5>Get in Touch</h5></button></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={`td ${styles.td}`}><Link className="nav-link active" aria-current="page" to="/AboutUs" >
                                <div className={`btn ${styles.btn}`}>About Us</div></Link></td>

                            <td className={`td ${styles.td}`}><Link className="nav-link active" aria-current="page" to="/ContactUs" >
                                <button className={`btn ${styles.btn}`}>Contact Us</button></Link></td>

                            <td className={`td ${styles.td}`}><Link className="nav-link active" aria-current="page" to="/TermsAndConditions" >
                                <button className={`btn ${styles.btn}`}>Terms and Conditions</button></Link></td>

                        </tr>
                        <tr>
                            <Link className="nav-link active" aria-current="page" to="/Mitaobhook" >
                                <button className={`btn ${styles.btn}`}>Mitao Bhook</button></Link>


                        </tr>
                        <tr>
                            <Link className="nav-link active" aria-current="page" to="/Mitaobhookscholarship" >
                                <td><button className={`btn ${styles.btn}`}>MitaoBhook-Scholarship</button></td></Link>


                        </tr>

                        <tr>
                            <Link className="nav-link active" aria-current="page" to="/PrivacyPolicy" >
                                <td colSpan="2"><button className={`btn ${styles.btn}`}>Privacy Policy</button></td></Link>


                        </tr>
                        <tr>
                            <Link className="nav-link active" aria-current="page" to="/Careers" >
                                <td colSpan="2"><button className={`btn ${styles.btn}`}>Careers</button></td></Link>


                        </tr>
                    </tbody>

                </table>
                <div className={`div ${styles.div}`}>
                    <img src="/assets/imgs/appstore.PNG"
                        style={{
                            width: "80%", height: "45px", marginTop: "60px",
                            borderRadius: "7px", marginLeft: "2%", border: "0.5px solid white"
                        }} alt='' />
                    <br />
                    <img src="/assets/imgs/playstore.PNG"
                        style={{
                            width: "80%", height: "45px", marginTop: "20px",
                            borderRadius: "7px", marginLeft: "2%", border: "0.5px solid white"
                        }} alt='' />
                </div>

            </div>



        </div>
    )
}

export default Footer