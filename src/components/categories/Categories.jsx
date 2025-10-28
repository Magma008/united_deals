

import { Link } from 'react-router-dom'
const Categories = () => {
  return (
    
    <div style={{ margin: "50px" }}>
        <h1>HOME</h1>
        <div style={{
              display: "flex"
        }}>  
            <h2>Shop From</h2>
            <h2 style={{
                color: "#FCBD01"
            }}>Top CateGories</h2>
            <Link to={"/Categories"}>
            
<button style={{
    marginLeft: "1000px",
    background: "#FCBD01",
    padding: "10px",
    borderRadius: "3px",
    border: "none",
    
}}>VIEW ALL</button>

</Link>

            </div>
            <br />
<hr />
<br />
<div style={{
    display: "flex",
    gap: "40px"
}}>
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
