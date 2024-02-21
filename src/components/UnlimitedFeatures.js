import React from 'react';

const UnlimitedFeatures = () => {
  return (
    <div style={{ display: "flex", padding: "200px" }}>
      <div>
        <img width="300px" height="100px" src="https://www.okx.com/cdn/assets/imgs/241/6C3C0C7503A6686E.png" alt="Tek Platform, Sınırsız Özellik Borsa" />
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
        <div style={{ fontSize: "40px", margin: "20px" }}>
          <span>Tek Platform, Sınırsız Özellik</span>
        </div>
        <div className="m-4 flex justify-content-between">
          <button type="button" style={{ marginLeft: "10px", border: "1px solid", borderRadius: "10px", padding: "5px", width: "200px" }}>Borsa</button>
          <button type="button" style={{ marginLeft: "20px", border: "1px solid", borderRadius: "10px", padding: "5px", width: "200px" }}>Web3</button>
        </div>
        <div style={{ margin: "20px" }}>
          <span>Kriptoda yeni misiniz? Hiç sorun değil. Tek dokunuşla 5 USD değerinde bile kripto satın alabilir ve ilerledikçe becerilerinizi geliştirebilirsiniz.</span>
        </div>
      </div>
    </div>
  );
};

export default UnlimitedFeatures;
