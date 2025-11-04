import React from 'react'

import { CATIGORES, DATAA } from '../../mock/ammorxon/categories/categories'

const Categories = () => {
  return (
    <div>
        {
           CATIGORES.map((item, index) => {
               return(
                   <div  key={index} style={{
                    display: "flex",
                  padding: "20px",
                  alignItems: "center",
                  justifyContent: "center"
                   }}>
                       <div style={{
                                            background: "#F5F5F5",                      
                                            height:"50px",
                                            width: "50px",
                                            fontSize: "30px",
                                            borderRadius: "50px",
                                            borderStyle: "solid",
                                            textAlign: "center",
                                            borderColor: "gray"
                                    }}>
                           <h2 style={{
                       margin: "1px",
                       paddingLeft: "5px"
                           }}>{item.icon}</h2>
                       </div>
                <h2 style={{
                    margin: "20px"
                }}>{item.h2}</h2>
                <h3 style={{
                  marginLeft: "70px",
                  marginRight: "70px",
                }}>{item.title}</h3>
                <h3 style={{
                    marginLeft: "200px"
                }}>{item.shov}</h3>
                <button style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "10px",
                    border: "none",
                    marginRight: "10px"
                }}>{item.button}</button>
              <button style={{
                width: "250px",
                height: "50px",
                border: "none",
                borderRadius: "5px"
              }}> {item.secshin }</button>
                   </div>
               )
           })
        }
<div style={{
    display: "flex",
    gap: "200px",
    flexWrap: "wrap",

}}>

{
    DATAA.map((item, index) => {
        return(
            <div style={{
                width: "20px",
                flexWrap: "wrap",
                
            }}>

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
                </div>
        )
    })
}

</div>
    </div>
  )
}

export default Categories
