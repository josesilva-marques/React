function skeletonCard(){
  return(
    <div
    style={{
      border: "1px solid #ddd",
      padding: "10px",
      borderRadius: "8px",
      background: "#f3f3f3",
      height: "200px"
    }}
    >
      <div
      style={{
        background: "#0e0e0",
        height: "100px",
        marginBottom: "10px"
      }}
      ></div>

      <div
      style={{
        background:"#e0e0e0",
        height: "15px",
        width: "60%"
      }}
      ></div>
      </div>
  );
}

export default skeletonCard;