import React from 'react'

const Footer = () => {
    return (
        <footer className="items-center p-4 bg-black text-white"
            style={{ backgroundColor: '#1a1a1a', height: 'auto', width: "100%", padding: "50px", color: "#545454", fontSize: "12px" }}>
            <div className="footer-wrap">
                <div className="f-b">
                    <div className="footer-section footer-top-box">
                        <div className="footer-top-logo logo-e">
                            <img
                                src="/logo.png"
                                className="w-20 h-auto"
                                alt="OKX - Önde Gelen Kripto Para Borsası"
                                title="OKX"
                            />
                        </div>
                        <div className="footer-copyright">©2017 - 2024 OKX.COM</div>
                    </div>
                </div>
            </div>
            <div className='mt-6'>
                <select style={{ background: "#1a1a1a", color: "white", border: "1px solid #545454" }}>
                    <option value="1">Türkçe</option>
                    <option value="1">English</option>
                </select>
            </div>
            <div className="flex justify-between m-4 p-2">
                <ul className="mr-4">
                    <li className="text-white text-base">OKX Hakkında</li>
                    <li><a href="/#">Hakkımızda</a></li>
                    <li><a href="/#">Kariyer</a></li>
                    <li><a href="/#">Bize Ulaşın</a></li>
                    <li><a href="/#">Hizmet Şartları</a></li>
                    <li><a href="/#">Gizlilik Politikası</a></li>
                    <li><a href="/#">Açıklamalar</a></li>
                    <li><a href="/#">Feragatname</a></li>
                    <li><a href="/#">Hukuki Yaptırım</a></li>
                    <li><a href="/#">OKX Uygulaması</a></li>
                </ul>

                <ul className="mr-4">
                    <li className="text-white text-base">Ürünler</li>
                    <li><a href="/#">Kripto Satın Al</a></li>
                    <li><a href="/#">P2P İşlemleri</a></li>
                    <li><a href="/#">Kripto Dönüştür</a></li>
                    <li><a href="/#">Al-Sat İşlemleri</a></li>
                    <li><a href="/#">Earn</a></li>
                    <li><a href="/#">OKC</a></li>
                    <li><a href="/#">Web3</a></li>
                    <li><a href="/#">Web3 Pazar Yeri</a></li>
                    <li><a href="/#">Kripto Hesap Makinesi</a></li>
                    <li><a href="/#">Al-Sat Botları</a></li>
                    <li><a href="/#">Tüm Kripto Paralar</a></li>
                    <li><a href="/#">Akademi</a></li>
                    <li><a href="/#">TradingView</a></li>
                </ul>

                <ul className="mr-4">
                    <li className="text-white text-base">Hizmetlerimiz</li>
                    <li><a href="/#">İş Ortaklığı Programı</a></li>
                    <li><a href="/#">V5 API</a></li>
                    <li><a href="/#">Geçmiş Piyasa Verileri</a></li>
                    <li><a href="/#">İşlem Ücretleri Tablosu</a></li>
                    <li><a href="/#">Listeleme Başvurusu</a></li>
                    <li><a href="/#">P2P İlanveren Başvurusu</a></li>
                    <li style={{ fontSize: "15px", color: "white", marginTop: "15px" }}><a href="/#">Destek</a></li>
                    <li><a href="/#">Destek Merkezi</a></li>
                    <li><a href="/#">Resmî Kanal Doğrulama</a></li>
                    <li><a href="/#">Duyurular</a></li>
                    <li><a href="/#">OKX Toplulukları</a></li>
                </ul>

                <ul className="mr-4">
                    <li className="text-white text-base">Kripto Satın Al</li>
                    <li><a href="/#">USDC Satın Al</a></li>
                    <li><a href="/#">USDT Satın Al</a></li>
                    <li><a href="/#">Bitcoin Satın Al</a></li>
                    <li><a href="/#">Ethereum Satın Al</a></li>
                    <li><a href="/#">ADA Satın Al</a></li>
                    <li><a href="/#">Solana Satın Al</a></li>
                    <li><a href="/#">MATIC Satın Al</a></li>
                    <li><a href="/#">Litecoin Satın Al</a></li>
                    <li><a href="/#">XRP Satın Al</a></li>
                    <li style={{ fontSize: "15px", color: "white", marginTop: "15px" }}><a href="/#">Kripto Hesap Makinesi</a></li>
                    <li><a href="/#">BTC/TRY</a></li>
                    <li><a href="/#">ETH/TRY</a></li>
                    <li><a href="/#">USDT/TRY</a></li>
                    <li><a href="/#">SOL/TRY</a></li>
                    <li><a href="/#">XRP/TRY</a></li>
                </ul>

                <ul className="mr-4">
                    <li className="text-white text-base">Al-Sat</li>
                    <li><a href="/#">BTC USDC</a></li>
                    <li><a href="/#">ETH USDC</a></li>
                    <li><a href="/#">BTC USDT</a></li>
                    <li><a href="/#">ETH USDT</a></li>
                    <li><a href="/#">MATIC USDT</a></li>
                    <li><a href="/#">LTC USDT</a></li>
                    <li><a href="/#">SOL USDT</a></li>
                    <li><a href="/#">XRP USDT</a></li>
                    <li><a href="/#">Bitcoin Fiyatı</a></li>
                    <li><a href="/#">Ethereum Fiyatı</a></li>
                    <li><a href="/#">Cardano Fiyatı</a></li>
                    <li><a href="/#">Solana Fiyatı</a></li>
                    <li><a href="/#">XRP Fiyatı</a></li>
                </ul>
                <ul className="mr-4">
                    <li className="text-white text-base">OKX Uygulaması</li>
                    <li className="text-white text-base">ile</li>
                    <li className="text-white text-base">Dilediğiniz Zaman</li>
                    <li className="text-white text-base">İşlem Yapabilirsiniz</li>
                    <li>
                        <button style={{ background: "white", color: "black",marginTop:"10px",marginBottom:"10px", padding: "10px", width: "150px", fontSize: "15px", borderRadius: "40px" }}>Kaydol</button>

                    </li>
                    <li className="text-white ">
                        <img alt='OKX uygulamasını indirmek için QR kodunu tarayın.' src='data:image/png;base64,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' />
OKX uygulamasını indirmek için QR kodunu tarayın.
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
