import React from "react";
import "../styles/productCard.css";

function ProductCards(props){
    return(
        <div class="covers">
            <p>{props.title}</p>

            <img src={props.imageSrc}
            alt={props.imageAlt}
             />

            <p>{props.price}</p>
            <p>{props.description}</p>

        </div>
    )
}

export default ProductCards;