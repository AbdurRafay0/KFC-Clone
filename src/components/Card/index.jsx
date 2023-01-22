import styles from "./Card.module.css"



function Card({ product }) {
  return (


    

    <div className={`card-body ${styles.card}`}>
      <div className={`card ${styles.incard}`}>
       <div className="cardimg">
       <img src={product.img}  className={`card-img-top ${styles.img}`} alt="..." />
       </div>
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>

          <div className={`lastline ${styles.ll}`}>
            <h5 className={`price ${styles.price}`}>{product.price}</h5>
            <button className={`btn btn-primary ${styles.cart}`}>Add to Cart</button>
          </div>

        </div>
      </div>
    </div>

  )
}

export default Card