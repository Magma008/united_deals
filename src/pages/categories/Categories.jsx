import React from 'react'
import { Link } from 'react-router-dom'
// import { DATA } from '../../mock/ammorxon/categories/categories'

const Categories = () => {
  return (
    <div>
<div style={{
    display: "flex",
    gap: "40px"
}}>
 
  
<h1>Catigores</h1>
    <br />
 
{/* {
    DATA.map((item, index) => {
        return(
            <div key={index}>
                <div style={{
                background: "#F5F5F5",
                width: "100px",
                height: "100px",
                borderRadius: "50%", 
                padding: "30px ",
           
            }}>

<img style={{ width: "80px"}} src={item.img} alt="erro" />
                </div>
                <br />
<h2 style={{
    marginLeft: "30px"
}}>{item.title}</h2>
            </div>
        )
    })
} */}

</div>
    </div>
  )
}

export default Categories
