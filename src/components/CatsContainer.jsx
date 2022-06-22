import React, { useEffect, useState } from 'react'
import Cat from './Cats'


export default function CatContainer() {
    const [cat, setCat] = useState({});
    useEffect(() => {
      fetch("https://catfact.ninja/fact")
        .then((response) => response.json())
        .then((data) =>{
            console.log(data);
            setCat(data);
        })
            .catch((e) => console.log(e))
            .finally(()=> {
                //no hacer nada
            });
    }, [])
    
  return (
    <>{cat.fact && <Cat cat={cat} />}

    </>

  )
}