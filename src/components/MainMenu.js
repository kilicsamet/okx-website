import React from 'react';

const MainMenu = ({ setActiveMenu }) => {
  return (
    <div style={{ background: "black", position: "absolute", marginTop: "140px", marginRight: "0px", zIndex: "1", marginLeft: "110px", width: "400px", fontSize: "10px" }}>
      {/* ... Menü içeriği ... */}
      <div className="flex justify-content-end">
        <button
          onClick={() => setActiveMenu(false)}
          style={{ marginTop: '25px', marginRight: '-10px', border: 'none', background: 'none', fontSize: '12px', cursor: 'pointer', marginLeft: "230px" }}>x</button>
      </div>
      <div className="m-4 flex justify-content-between">
        <button type="button" style={{ marginLeft: "10px", border: "1px solid", borderRadius: "10px", padding: "5px", width: "100px" }}>Borsa</button>
        <button type="button" style={{ marginLeft: "20px", border: "1px solid", borderRadius: "10px", padding: "5px", width: "100px" }}>Web3</button>
      </div>
      <div className="m-4">Destek</div>
      <div className="m-4">Türkçe/TRY</div>
      <div className="m-4">
        <button type="button" style={{ marginLeft: "10px", border: "1px solid", borderRadius: "10px", padding: "8px", width: "220px" }}>Mobil Uygulamaları İndir</button>
      </div>
    </div>
  );
};

export default MainMenu;
