import ItemCount from "./ItemCount"



function ItemListContainer() {
  const onAdd = (btnClick) => {
    if(btnClick === 0){
        return
    }else{
        alert("Se agrego al carrito correctamente")
    }        
}
  return (
    <div className="item-container">
    
        <ItemCount onAdd={onAdd} stock={50} initial={0}></ItemCount>
    </div>
  )
}
export default ItemListContainer