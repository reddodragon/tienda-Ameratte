import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemsLayout from "./ItemList";
import { collection, getDocs, getFirestore } from "firebase/firestore";

export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [catalog, setCatalog] = useState([]);

  let { idCat } = useParams();

  useEffect(() => {
    async function getItems() {
      let auxArray = [];
      let aux;
      const db = getFirestore();
      const prod = collection(db, "Productos");
      let promise = getDocs(prod).then((res) => {
        res.docs.map((item) => {
          aux = { ...item.data(), id: item.id };
          auxArray = auxArray.concat(aux);
          return auxArray;
        });
        setCatalog(auxArray);
      });

      await promise;
    }

    getItems();

    let categotyFilter = catalog.filter((item) => item.cat === idCat);

    if (idCat === undefined) {
      setProductos(catalog);
      console.log(catalog);
      setLoading(false);
    } else {
      setProductos(categotyFilter);
      setLoading(true);
    }

    
  }, [idCat, catalog]);


  return loading ? (
    <h1>loading...</h1>
  ) : (
    productos && <ItemsLayout productos={productos} />
  );
}

// let arrayFiltrado = productos.filter((item) => item.category === "nike")
//           setProductos(arrayFiltrado);
