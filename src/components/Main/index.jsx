import Slider from "../Slider"
import styles from "./Main.module.css"
import Card from "../Card"
import { catagories } from "../../../src/Data/Data";



function Main({ products, }) {


    return (
        <div className={`container-fluid ${styles.cont}`}>
            <div className="row">

                <Slider />


            </div>
            <div className="container">
                <div className={`catg ${styles.catg}`}>
                    <div className={`head ${styles.head}`}>
                        <h3> Browse Catagories</h3>
                    </div>
                    <div className={`line ${styles.line}`}>

                    </div>
                </div>
            </div>

            <div className={`cat ${styles.cat}`}>
                {
                    catagories.map(catagory => {
                        return (
                            <img src={catagory.catImg} alt="" />
                        )
                    })
                }
            </div>




            <div className="container">
                <div className={`catg1 ${styles.catg1}`}>
                    <div className={`head1 ${styles.head1}`}>
                        <h3>Top Selling</h3>
                    </div>
                    <div className={`line1 ${styles.line1}`}>

                    </div>
                </div>
            </div>




            <div className={`row ${styles.cardrow}`}>
                {
                    products.map((product) => {
                        return <div className='col-md-3'>
                            <Card product={product} />
                        </div>

                    })
                }

            </div>




        </div>
    )
}

export default Main