import React from "react";
import ItemCount from "./ItemCount"


export const ItemDetail = ({id, title, precio, pictureURL, stock}) => {
    const onAdd = (btnClick) => {
        if(btnClick === 0){
            return
        }else{
            alert("Agregaste " + btnClick + " items al carrito");
        }        
    }
    return (
    <>
        <div className="container">
            <div>
                <ItemCount onAdd={onAdd} stock={stock} initial={1} title={title} precio={precio} img={pictureURL}></ItemCount> 
            </div>
        </div>
        
    </> 
    )
}


