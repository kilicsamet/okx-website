import React from 'react';

const FooterSection = () => {
  return (
    <div style={{ margin: "60px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <button style={{ background: "white", color: "black", padding: "20px", width: "150px", fontSize: "15px", borderRadius: "40px" }}>
        Keşfet
      </button>
      <img
        src="/logo.png"
        className="w-20 h-auto"
        alt="OKX - Önde Gelen Kripto Para Borsası"
        title="OKX"
        style={{ marginLeft: "auto", marginRight: 0, width: "400px" }}
      />
    </div>
  );
};

export default FooterSection;
