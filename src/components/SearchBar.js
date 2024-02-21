import React from 'react';
import { RiSearchLine } from 'react-icons/ri';
import Link from 'next/link';

const SearchBar = ({ activeSearch, setActiveSearch }) => {
  return (
    <div style={{ color: 'black', margin: '30px' }}>
      <div className="flex items-center " onClick={() => setActiveSearch(!activeSearch)}>
        <RiSearchLine
          style={{
            fontSize: '8px',
            background: '#404040',
            padding: '5px'
          }}
          color="gray"
          size={22}
        />
        <input
          type="text"
          placeholder="Kripto Ürünleri Arayın"
          className="text-gray-400"
          style={{
            fontSize: '8px',
            padding: '5px',
            background: '#404040',
            border: 'none',
            outline: 'none',
          }}
        />
      </div>
      <div
        className="absolute p-2 m-3"
        style={{
          backgroundColor: "white",
          color: "black",
          fontSize: "12px",
          border: "1px solid #bdbdbd",
          borderRadius: "5px",
          width: "250px",
          display: activeSearch ? 'block' : 'none',
        }}
      >
        <SearchResults />
      </div>
    </div>
  );
};

const SearchResults = () => {
  return (
    <div>
      <ul>
        <li className="p-3"> <Link href="/#" className="font-bold" >Popüler Aramalar</Link> </li>
        <li className="p-3"> <Link href="/#" className="font-bold flex justify-between" >
          <div>1 STRK/USDT</div>
          <div>1,7750</div>
        </Link></li>
        <li className="p-3"> <Link href="/#" className="font-bold flex justify-between" >
          <div>2 WLD/USDT</div>
          <div>1,7750</div>
        </Link></li>
        <li className="p-3"> <Link href="/#" className="font-bold flex justify-between" >
          <div>3 FIL/USDT</div>
          <div>1,7750</div>
        </Link></li>
        <li className="p-3"> <Link href="/#" className="font-bold flex justify-between" >
          <div>4 ETH/USDT</div>
          <div>1,7750</div>
        </Link></li>
        <li className="p-3"> <Link href="/#" className="font-bold flex justify-between" >
          <div>5 OP/USDT</div>
          <div>1,7750</div>
        </Link></li>
      </ul>
    </div>
  );
};

export default SearchBar;
