import React from 'react';

const ProfessionalTrading = () => {
  return (
    <div style={{
      color: "white",
      marginTop: "50px", padding: "100px",
      display: "flex", flexDirection: "column",
      alignItems: "center", alignContent: "center"
    }}>
      <div style={{ fontSize: "40px", margin: "20px" }}>
        <span>Profesyonel İşlemler Yapın</span>
      </div>
      <div style={{ color: "#545454", margin: "20px" }}>
        <span>En Düşük İşlem Ücretleri, En Hızlı İşlemler, Güçlü API Desteği ve Daha Fazlası</span>
      </div>
      <div style={{ margin: "20px" }}>
        <video className="first-img" autoPlay loop muted playsInline
          poster="https://www.okx.com/cdn/assets/imgs/233/939BF8112345BC9B.png?x-oss-process=image/format,webp">
          <source src="https://www.okx.com/cdn/assets/files/2212/882D5049A31E763B.mp4" type="video/mp4" />
          <track kind="captions" />
        </video>
      </div>
    </div>
  );
};

export default ProfessionalTrading;
