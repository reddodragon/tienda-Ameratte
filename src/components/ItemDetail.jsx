import React from "react";
import ItemCount from "./ItemCount"


const ItemDetail = ({id, title, precio, pictureURL, stock, text}) => {
    const onAdd = (btnClick) => {
        if(btnClick === 0){
            return
        }else{
            alert("Se agrego al carrito correctamente")
        }        
    }
    return (
    <>
        <div className="container">
            <div className="imgContainer">
                <img src={pictureURL} alt="producto"></img>
            </div>
            <div className="text">
                <p>{title}</p>
                <p>{text}</p>
                <p>precio: ${precio}</p>
                <p>Available stock: {stock}</p>
                <ItemCount onAdd={onAdd} stock={stock} initial={1}></ItemCount> 
            </div>
        </div>
        
    </> 
    )
}


export default ItemDetail;