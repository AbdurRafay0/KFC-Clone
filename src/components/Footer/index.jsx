import React from "react"
import styles from "./Footer.module.css"
import { Link } from "react-router-dom"


function Footer() {
    return (
        <div className={`footer ${styles.footer}`}>

            <div className={`footimg ${styles.footimg}`}>

            <Link className="nav-link active" aria-current="page" to="/" >
            <img src="/assets/imgs/logo.png" style={{ width: "150px", marginRight: "auto" }} alt='' />
          </Link>
                <img src="/assets/imgs/youtube.png" style={{ width: "50px", height: "40px", marginTop: "40px", borderRadius: "50%", marginLeft: "10px" }} alt='' />
                <img src="/assets/imgs/insta.jpeg" style={{ width: "50px", height: "40px", marginTop: "40px", borderRadius: "50%", marginLeft: "10px" }} alt='' />
                <img src="/assets/imgs/fb.png" style={{ width: "50px", height: "40px", marginTop: "40px", borderRadius: "50%", marginLeft: "10px" }} alt='' />

            </div>




            <table class={`table ${styles.table}`}>
                <thead>
                    <tr>

                        <th >

                            <button className={`btn ${styles.btn1}`}><h4>Information</h4></button>

                        </th>

                        <th ><button className={`btn ${styles.btn1}`}><h4>Locations</h4></button></th>
                        <th ><button className={`btn ${styles.btn1}`}><h4>Get in Touch</h4></button></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><Link className="nav-link active" aria-current="page" to="/AboutUs" >
                            <button className={`btn ${styles.btn}`}>About Us</button></Link></td>

                        <td><Link className="nav-link active" aria-current="page" to="/ContactUs" >
                            <button className={`btn ${styles.btn}`}>Contact Us</button></Link></td>

                            <td><Link className="nav-link active" aria-current="page" to="/TermsAndConditions" >
                            <button className={`btn ${styles.btn}`}>Terms and Conditions</button></Link></td>
                        
                    </tr>
                    <tr>
                        <Link className="nav-link active" aria-current="page" to="/Mitaobhook" >
                            <button className={`btn ${styles.btn}`}>Mitao Bhook</button></Link>


                    </tr>
                    <tr>
                        <Link className="nav-link active" aria-current="page" to="/Mitaobhookscholarship" >
                            <td><button className={`btn ${styles.btn}`}>MitaoBhook-Sc</button></td></Link>


                    </tr>

                    <tr>
                        <Link className="nav-link active" aria-current="page" to="/PrivacyPolicy" >
                            <td colspan="2"><button className={`btn ${styles.btn}`}>Privacy Policy</button></td></Link>


                    </tr>
                    <tr>
                        <Link className="nav-link active" aria-current="page" to="/Careers" >
                            <td colspan="2"><button className={`btn ${styles.btn}`}>Careers</button></td></Link>


                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Footer