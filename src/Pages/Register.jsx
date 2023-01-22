import styles from "./Register.module.css"

function Register() {
    return (
        <div className={`container-fluid ${styles.container}`}>
            <div className={`box ${styles.box}`}>
                <div class="form-floating mb-3">
                    <input type="email" class={`form-control ${styles.input}`} id="floatingInput" placeholder="name@example.com" />
                    <label className={`inpname ${styles.inpname}`} for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <input type="password" class={`form-control ${styles.input2}`} id="floatingPassword" placeholder="Password" />
                    <label className={`inpname ${styles.inpname}`} for="floatingPassword">Password</label>
                </div>

                <button type="submit" class={`btn btn-primary ${styles.btn}`}>Login</button>

            </div>
        </div>
    )

}
export default Register