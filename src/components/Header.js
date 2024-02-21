"use client";
import React, { useState } from "react";
import Link from 'next/link';
import {RiListUnordered } from 'react-icons/ri';
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import MainMenu from "./MainMenu";
export default function Header() {
  const [activeButton, setActiveButton] = useState("/tr");
  const [activeSearch, setActiveSearch] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);
  const handleButtonClick = (url) => {
    setActiveButton(url);
  };
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleMouseEnter = (link) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  const isLinkHovered = (link) => {
    return hoveredLink === link;
  };

  const getMenuItems = () => {
    return [
      {
        list: (
          <ul>
            <li className="p-3"> <Link href="/#" className="font-bold" >Hızlı Kripto Satın Al </Link>
              <ul><li>
                <Link href="/#" className="text-gray-400">Visa, Mastercard ve Diğerleri </Link>

              </li></ul>
            </li>
            <li className="p-3"> <Link href="/#" className="font-bold" >P2P İşlemleri </Link>
              <ul><li>
                <Link href="/#" className="text-gray-400">Yüzlerce ödeme yöntemi, sıfır işlem ücreti ile kripto alım satım </Link>

              </li></ul>
            </li>
            <li className="p-3"> <Link href="/#" className="font-bold" >Diğer Ödeme Yöntemleri </Link>
              <ul><li>
                <Link href="/#" className="text-gray-400">Banxa, Simplex ve Diğerleri </Link>

              </li></ul>
            </li>
          </ul>
        ),
        link: "Kripto Satın Al",
        text: "Kripto Satın Al"
      },
      {
        list: (
          <ul>
            <li className="p-3"> <Link href="/#" className="font-bold" >Piyasalar </Link>
              <ul><li>
                <Link href="/#" className="text-gray-400">Güncel Kripto fiyatları, Hacimleri ve Tüm Verileri </Link>

              </li></ul>
            </li>
            <li className="p-3"> <Link href="/#" className="font-bold" >Fırsatlar </Link>
              <ul><li>
                <Link href="/#" className="text-gray-400">En Popüler ve Yeni Kriptolar, Piyasa Fırsatları </Link>

              </li></ul>
            </li>
            <li className="p-3"> <Link href="/#" className="font-bold" >Copy Trade </Link>
              <ul><li>
                <Link href="/#" className="text-gray-400">En İyi Traderlarla Kazançlı İşlemler </Link>

              </li></ul>
            </li>
          </ul>
        ), text: "Keşfet", link: "Keşfet"
      },
      {
        list: (
          <ul>
            <li className="p-3"> <Link href="/#" className="font-bold" >Dönüştür </Link>
              <ul><li>
                <Link href="/#" className="text-gray-400">Alış, Satış Farkı ve Komisyon Olmadan Hızlı Dönüştürme İşlemleri </Link>

              </li></ul>
            </li>
            <li className="p-3"> <Link href="/#" className="font-bold" >Spot İşlemler </Link>
              <ul><li>
                <Link href="/#" className="text-gray-400">Kolaylıkla Kripto Al-Sat İşlemleri </Link>

              </li></ul>
            </li>
            <li className="p-3"> <Link href="/#" className="font-bold" >Vadeli İşlemler </Link>
              <ul><li>
                <Link href="/#" className="text-gray-400">Kaldıraçlı Sürekli Swap ve Vadeli İşlemler </Link>

              </li></ul>
            </li>
          </ul>
        ), text: "Al-Sat", link: "Al-Sat"
      },
      {
        list: (
          <ul>
            <li className="p-3"> <Link href="/#" className="font-bold" >Earn </Link>
              <ul><li>
                <Link href="/#" className="text-gray-400">Mevcut Kriptolarla Kazanç Sağlama Fırsatları </Link>

              </li></ul>
            </li>
            <li className="p-3"> <Link href="/#" className="font-bold" >C2C Kredi </Link>
              <ul><li>
                <Link href="/#" className="text-gray-400">Yatırım İhtiyaçlarına Yönelik İşlemler </Link>

              </li></ul>
            </li>
            <li className="p-3"> <Link href="/#" className="font-bold" >Copy Trade </Link>
              <ul><li>
                <Link href="/#" className="text-gray-400">En İyi Traderlarla Kazançlı İşlemler </Link>

              </li></ul>
            </li>
          </ul>
        ), text: "Finans", link: "Finans"
      },
      {
        list: (
          <ul>
            <li className="p-3"> <Link href="/#" className="font-bold" >Keşfet </Link>
              <ul><li>
                <Link href="/#" className="text-gray-400">Web3 Dünyasına Giriş </Link>

              </li></ul>
            </li>
            <li className="p-3"> <Link href="/#" className="font-bold" >Yazılım Geliştiriciler </Link>
              <ul><li>
                <Link href="/#" className="text-gray-400">Geliştirme Özgürlüğü </Link>

              </li></ul>
            </li>
            <li className="p-3"> <Link href="/#" className="font-bold" >Resmi Dappler </Link>
              <ul><li>
                <Link href="/#" className="text-gray-400">AltYapı Ürünleri </Link>

              </li></ul>
            </li>
          </ul>
        ), text: "Oluştur", link: "Oluştur"
      },
      {
        list: (
          <ul>
            <li className="p-3"> <Link href="/#" className="font-bold" >Kurumsal Ana Sayfa </Link>
              <ul><li>
                <Link href="/#" className="text-gray-400">Dünyanın en güçlü kripto al-sat çözümleri paketi </Link>

              </li></ul>
            </li>
            <li className="p-3"> <Link href="/#" className="font-bold" >Likit Piyasa </Link>
              <ul><li>
                <Link href="/#" className="text-gray-400">Profosyonel ve Kurumsal Müşteriler İçin OTC Likidite Ağı  </Link>

              </li></ul>
            </li>
            <li className="p-3"> <Link href="/#" className="font-bold" >API Yönetimi </Link>
              <ul><li>
                <Link href="/#" className="text-gray-400">Kesintisiz ve Ultra Düşük Gecikmeli API Entegrasyonu </Link>

              </li></ul>
            </li>
          </ul>
        ), text: "Kurumsal", link: "Kurumsal"
      },
      { text: "Akademi" },
      {
        list: (
          <ul>
            <li className="p-3"> <Link href="/#" className="font-bold" >Maden Havuzu </Link>
            </li>
            <li className="p-3"> <Link href="/#" className="font-bold" >OKB </Link>
            </li>
            <li className="p-3"> <Link href="/#" className="font-bold" >Fon Güvenliği </Link>
            </li>
          </ul>
        ), text: "Daha Fazlası", link: "Daha Fazlası"
      },
    ];
  };

  return (
    <header className="flex justify-between items-center p-4 bg-black text-white" style={{ backgroundColor: '#1a1a1a', height: '40px', width: "100%" }}>
     <NavBar
     activeButton={activeButton}
     handleButtonClick={handleButtonClick}
      handleMouseEnter={handleMouseEnter}
       handleMouseLeave={handleMouseLeave}
       isLinkHovered={isLinkHovered}
       getMenuItems ={getMenuItems}
     />
         <div className="flex items-center">
      <SearchBar activeSearch={activeSearch} setActiveSearch={setActiveSearch} />
      <div style={{ fontSize: "10px" }}>
        <button type="button">Giriş Yap</button>
        <button type="button" style={{ marginLeft: "10px", border: "1px solid", borderRadius: "5px", padding: "3px" }}>Kaydol</button>
      </div>
      <div style={{ fontSize: "10px", marginLeft: "10px", marginRight: "-20px" }}>
        <button type="button" onClick={() => setActiveMenu(true)}>
          <RiListUnordered
            style={{
              fontSize: '8px',
              padding: '5px',
              margin: "10px"
            }}
            color="gray"
            size={30}
          />
        </button>
      </div>
      {activeMenu && <MainMenu setActiveMenu={setActiveMenu} />}
    </div>
    </header>
  );
}

