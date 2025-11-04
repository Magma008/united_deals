import { electronis } from "../../mock/mohirjon/electronics_page/electronics_page";

const Electronics = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: "40px" }}>
      {electronis.map((item, index) => (
        <div
          key={index}
          style={{
            width: "350px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "15px",
            textAlign: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            marginLeft: "50px",
          }}
         >

          <img
            src={item.url}
            alt={item.title}
            style={{ width: "100%", height: "180px", objectFit: "contain" }}
          />
          <h1 style={{ fontSize: "16px", margin: "10px 0", color: "#333" }}>{item.title}</h1>
          <p style={{ color: "#666" }}>⭐ {item.rating}</p>
          <h2 style={{ fontSize: "14px", color: "#888" }}>{item.reviews}</h2>
          <h3 style={{ color: "#000", fontWeight: "bold" }}>{item.price}</h3>
        </div>
      ))}
    </div>
  );
};

export default Electronics;
