import React,{useEffect}  from 'react'

function Api() {

    useEffect(() =>{
        fetch('https://carfact.ninja/factd')
    .then((response) => response.json())
    .then((data) => console.log(data))
    }, [])
  return (
    <>Api</>
  )
}

export default Api