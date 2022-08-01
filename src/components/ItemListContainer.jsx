import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemsLayout from "./ItemList";
import { collection, getDocs, getFirestore } from "firebase/firestore";

export default function ItemListContainer() {
  const [loading, setLoading] = useState(true);
  const [catalog, setCatalog] = useState([]);

  let { idCat } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const prod = collection(db, "Productos");

    if (idCat) {
      getDocs(prod).then((e) => {
        const auxCatalog = e.docs.map((item) => ({
          ...item.data(),
          id: item.id,
        }));
        const auxCat = auxCatalog.filter(product => product.cat === idCat);
        setCatalog(auxCat);
        setLoading(false);
      });
    } else {
      getDocs(prod).then((e) => {
        const auxCatalog = e.docs.map((item) => ({
          ...item.data(),
          id: item.id,
        }));
        setCatalog(auxCatalog);
        setLoading(false);
      });
    }
  }, [idCat]);

  return loading ? (
    <h1>loading...</h1>
  ) : (
    catalog && <ItemsLayout productos={catalog} />
  );
}

// let arrayFiltrado = productos.filter((item) => item.category === "nike")
//           setProductos(arrayFiltrado);
