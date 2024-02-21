import React from 'react';

const VideoGallery = () => {
  return (
    <div style={{ margin: "60px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <video
        style={{ width: "300px", height: "300px" }}
        className="first-img"
        loop
        muted
        playsInline
        poster="https://www.okx.com/cdn/assets/imgs/2211/30151288EAF5AEE6.jpg?x-oss-process=image/format,webp"
        controls
      >
        <source src="https://www.okx.com/cdn/assets/files/2210/B961D658AE174818.mp4" type="video/mp4" />
        <track kind="captions" />
      </video>
      <video
        style={{ width: "300px", height: "300px" }}
        className="first-img"
        loop
        muted
        playsInline
        poster="https://www.okx.com/cdn/assets/imgs/2211/8D4C3E2605F69059.jpg?x-oss-process=image/format,webp"
        controls
      >
        <source src="https://www.okx.com/cdn/assets/files/2210/D583B0A2F58732CD.mp4" type="video/mp4" />
        <track kind="captions" />
      </video>
      <video
        style={{ width: "300px", height: "300px" }}
        className="first-img"
        loop
        muted
        playsInline
        poster="https://www.okx.com/cdn/assets/imgs/2211/EF1304B5D4D9DB3E.jpg?x-oss-process=image/format,webp"
        controls
      >
        <source src="https://www.okx.com/cdn/assets/files/2210/CCAA7B610D3D33D4.mp4" type="video/mp4" />
        <track kind="captions" />
      </video>
    </div>
  );
};

export default VideoGallery;
