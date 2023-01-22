
import Main from "../components/Main/index";
// import Footer from "../components/Footer/index";
import { products  } from "../Data/Data";

function Home() {
    return (
        <div>
           
            <Main products={products} />

            
        </div>
    )
}
export default Home