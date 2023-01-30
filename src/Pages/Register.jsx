import styles from "./Register.module.css"
import { useFormik } from "formik"
import * as Yup from 'yup'

function Register() {

    const {handleSubmit,  handleChange, handleBlur, values, errors, touched} = useFormik({
        initialValues:{
            name:'',
            password:''
        },
        validationSchema:Yup.object({
            name:Yup.string()
            .required()
            .min(4, 'Name must be atleast of 4 characters'),
            contact:Yup.number()
            .required()
    }),
        onSubmit:(values)=>{}
    })


    return (
        <div className={`container-fluid ${styles.container}`}>
            <form onSubmit={handleSubmit}>
            <div className={`box ${styles.box}`}>

                <div className={`heading ${styles.head}`}>
                    <h2>WELCOME !</h2>
                </div>

                <div className="form-floating mb-3" onSubmit={handleSubmit}>
                    <input type="string" className={`form-control ${styles.input}`}
                     onChange={handleChange} onBlur={handleBlur} values={values.name}
                      name="name" id="floatingInput" placeholder="Name" />
                      <h6 className={`error ${styles.error}`} style={{color:'rgb(255, 9, 50)'}}>{touched.name && errors.name ? errors.name:null}</h6>
                    <label className={`inpname ${styles.inpname}`} for="floatingInput">Name</label>
                </div>

                <div className="form-floating mb-3" onSubmit={handleSubmit}>
                    <input type="string" className={`form-control ${styles.input2}`}
                     onChange={handleChange} onBlur={handleBlur} values={values.contact}
                      name="contact" id="floatingInput" placeholder="Contact No" />
                      <h6 className={`error ${styles.error}`} style={{color:'rgb(255, 9, 50)'}}>{touched.contact && errors.contact ? errors.contact:null}</h6>
                    <label className={`inpname ${styles.inpname}`} for="floatingInput">Contact No</label>
                </div>
                

                <button type="submit" className={`btn btn-primary ${styles.btn}`}><h6>Login</h6></button>

               
                    <h6 className={`head2 ${styles.head2}`}>Or Login with</h6>
                    <img src="/assets/imgs/google.png" style={{ width: "40px", height: "40px", marginTop: "1%", borderRadius: "50%", marginLeft: "69%", marginBottom:"7%" }} alt='' />

                
            </div>
            </form>
        </div>
    )

}
export default Register