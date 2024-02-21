import React from 'react';
import { RiAddCircleLine, RiIndeterminateCircleLine } from 'react-icons/ri';

const FrequentlyAskedQuestions = ({ handleButtonClick, activeButton }) => {
  return (
    <div>
      <div style={{ display: "flex", padding: "50px", alignItems: "center", flexDirection: "column" }}>
        <div style={{ fontSize: "40px", margin: "20px" }}>
          <span>Sorularınız mı var?</span>
        </div>
      </div>

      {renderFAQItem("OKX hangi ürüleri satıyor?", activeButton, handleButtonClick, `
        OKX, gelişmiş finansal tekliflere sahip yenilikçi bir kripto para borsasıdır.
        180’den fazla bölgede dünya çapında milyonlarca kullanıcıya son teknoloji kripto
        alım-satımı ve kazanç hizmetleri sunuyoruz.
        OKX ile şunları yapabilirsiniz:
        - Spot, marjin ve vadeli işlem piyasalarında yüzlerce token ve al-sat çifti ile al-sat yapın.
        - Tüm merkeziyetsiz varlıklarınızı tek bir yerde düzenlemek için Web3 cüzdanınızı bağlayarak DeFi (Merkeziyetsiz Finans) portföyünüzü yönetebilirsiniz.
        - NFT piyasasında çeşitli NFT’ler oluşturabilir, satın alabilir veya satabilirsiniz.
        - DeFi (Merkeziyetsiz Finans) ve blok zinciri oyun DApp’leri dahil en iyi merkeziyetsiz uygulamaları keşfedebilirsiniz.
        - Uygulamamız veya tarayıcı uzantımız aracılığıyla Web3 cüzdanımızla DeFi’a (Merkeziyetsiz Finans) bağlanabilirsiniz.
        - Madencilik havuzlarımızda kripto kazanabilir, kripto teminatlı krediler alabilir ve OKX Earn ile kriptonuzu çoğaltmanın diğer yollarını keşfedebilirsiniz.
        - Dünyaca ünlü TradingView Platformu’na bağlanarak platformun son derece detaylı grafikleriyle kripto alıp satabilirsiniz.
      `)}

      {renderFAQItem("OKX’te nasıl Bitcoin satın alırım?", activeButton, handleButtonClick, `
        GBP, EUR, USD veya yerel para biriminizle dakikalar içinde kolayca Bitcoin satın alı. OKX;
        Visa, Mastercard ve ApplePay kredi kartları da dahil olmak üzere çeşitli popüler ödeme yöntemlerini destekler.
        Başlamak için OKX ile Bitcoin satın alma hakkındaki en son kılavuzumuza göz atın.
        Kripto ekosisteminde ilgi çeken diğer coin’leri alıp satmak veya elinizde tutmak mı istiyorsunuz?
        Yolculuğunuza hemen başlamak için aşağıdaki ücretsiz kaynaklara göz atın:
        - BTC Satın Al
        - USDT Satın Al
        - ETH Satın Al
        - DOT Satın Al
        - SOL Satın Al
        - DOGE Satın Al
      `)}

      {renderFAQItem("OKX nerede kuruldu?", activeButton, handleButtonClick, `
        2017 yılında kurulan OKX, yeni nesil finansal ekosistemi inşa etmek için blok zinciri teknolojisini benimseyen
        Seyşeller’de kayıtlı bir kripto para borsasıdır ve yüzlerce kripto para için çeşitli işlem türleri sunar.
      `)}

      {renderFAQItem("OKX’te kripto al-sat işlemleri nasıl yapılır?", activeButton, handleButtonClick, `
        OKX kullanıcıları Bitcoin, Ethereum ve diğer kripto paralarda işlem yapmak için Spot, Vadeli İşlemler, Marjin ve Opsiyonlar işlemleri gibi
        çeşitli seçeneklerden yararlanabilirler! OKX’te al-sat stratejilerinizin bir parçası olarak Al-sat botları ve copy trade işlemlerinden de yararlanabilirsiniz.
      `)}
    </div>
  );
};

const renderFAQItem = (question, activeButton, handleButtonClick, content) => {
  return (
    <div>
      <div
        onClick={() => handleButtonClick(question)}
        style={{ fontSize: "30px", margin: "60px", display: "flex", padding: "30px", justifyContent: "space-between", alignItems: "center" }}
      >
        <span>{question}</span>
        <button>
          {activeButton[question] ? <RiIndeterminateCircleLine size={50} /> : <RiAddCircleLine size={50} />}
        </button>
      </div>
      {activeButton[question] &&
        <div style={{ margin: "60px", padding: "30px", justifyContent: "center", alignItems: "center" }}>
          <p>{content}</p>
        </div>}
      <div style={{ background: "white", height: "1px", marginTop: "-20px" }}></div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
