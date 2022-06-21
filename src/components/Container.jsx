import ItemCount from "./ItemCount"



function ItemListContainer() {
  return (
    <div className="item-container">
    
        <ItemCount stock={50} initial={20}></ItemCount>
    </div>
  )
}
export default ItemListContainer