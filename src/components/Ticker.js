import React from 'react';
import styles from '../styles/Ticker.module.css'

const Ticker = () => {
  return (
    <div className={`ticker-container ${styles['ticker-container']}`}>
      <div className={`ticker-viewer ${styles['ticker-viewer']}`}>
        <div className={`ticker-scroll ${styles['ticker-scroll']}`}>
          <a className={`ticker-item ${styles['ticker-item']}`} href="/tr/markets/prices/top-cryptocurrency">BTC ₺1.605.520,84 (-%1,94)</a>
          <a className={`ticker-item ${styles['ticker-item']}`} href="/tr/markets/prices/top-cryptocurrency">ETH ₺90.773,63 (-%1,68)</a>
          <a className={`ticker-item ${styles['ticker-item']}`} href="/tr/markets/prices/top-cryptocurrency">OKB ₺1.773,63 (-%1,68)</a>
          <a className={`ticker-item ${styles['ticker-item']}`} href="/tr/markets/prices/top-cryptocurrency">MATIC ₺29,63 (-%1,68)</a>
          <a className={`ticker-item ${styles['ticker-item']}`} href="/tr/markets/prices/top-cryptocurrency">XRP ₺17,63 (-%1,68)</a>
          <a className={`ticker-item ${styles['ticker-item']}`} href="/tr/markets/prices/top-cryptocurrency">SOL ₺3.233,63 (-%1,68)</a>
          <a className={`ticker-item ${styles['ticker-item']}`} href="/tr/markets/prices/top-cryptocurrency">DOGE 2,63 (-%1,68)</a>
        </div>
      </div>
    </div>
  );
};

export default Ticker;
