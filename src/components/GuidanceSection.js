import React from 'react';

const GuidanceSection = () => {
  return (
    <div style={{ display: "flex", padding: "50px", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
      <div style={{ fontSize: "40px", margin: "20px" }}>
        <span>Yolculuğunuzun Her Aşamasında Sizinle</span>
      </div>
      <div style={{ margin: "20px" }}>
        <span>İlk kripto al-sat deneyiminizden ilk NFT işleminize kadar, tüm süreç boyunca size rehberlik edeceğiz.</span>
      </div>
      <video className="first-img" autoPlay loop muted playsInline
        poster="https://www.okx.com/cdn/assets/imgs/2210/2763D233C494439D.jpg?x-oss-process=image/format,webp">
        <source src="https://www.okx.com/cdn/assets/files/2210/D47D930F643E7A00.webm" type="video/mp4" />
        <track kind="captions" />
      </video>
    </div>
  );
};

export default GuidanceSection;
