import React from 'react';

const HeroSection = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-black text-white" style={{ padding: "150px", width: "100%" }}>
      <div style={{ fontSize: "50px", margin: "20px" }}>
        <div>
          <span>Ortalama Kripto Borsalarından Daha Hızlı, Daha İyi, Daha Güçlü</span>
        </div>
        <div style={{ fontSize: "20px" }}>
          <input
            type="text"
            placeholder='E-posta/Telefon'
            style={{
              marginLeft: "10px", border: "1px solid",
              borderRadius: "3px", padding: "20px",
              background: '#404040',
              border: 'none',
              outline: 'none',
            }}
          />
          <button
            type="button"
            style={{
              marginLeft: "10px", border: "1px solid",
              borderRadius: "20px", padding: "20px", background: "white",
              color: "black"
            }}
          >OKXi  Deneyimleyin</button>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "50px" }}>
          <img width="185" height="75" class="" src="https://www.okx.com/cdn/assets/imgs/236/DD7AC9432E675714.png" alt="Ortalama Kripto Borsalarından Daha Hızlı, Daha İyi, Daha Güçlü" />
          <img width="129" height="34" class="" src="https://www.okx.com/cdn/assets/imgs/2210/499A92F3657A52EC.png" alt="Ortalama Kripto Borsalarından Daha Hızlı, Daha İyi, Daha Güçlü" />
          <img width="64" height="64" class="" src="https://www.okx.com/cdn/assets/imgs/2210/6279B178FADAFCC5.png" alt="Ortalama Kripto Borsalarından Daha Hızlı, Daha İyi, Daha Güçlü" />
        </div>
      </div>
      <div>
        <video className="first-img" autoPlay loop muted playsInline poster="https://www.okx.com/cdn/assets/imgs/241/7952167B03F2361A.png?x-oss-process=image/format,webp">
          <source src="https://www.okx.com/cdn/assets/files/241/32192407FC118924.webm" type="video/webm" />
          <source src="https://www.okx.com/cdn/assets/files/241/75CA241D6B3464F7.mp4" type="video/mp4" />
          <track kind="captions" />
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
