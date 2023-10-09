'use client'
import React from 'react'
import SearchManufacturer from "./SearchManufacturer";
import { useState } from 'react'
import { manufacturers } from '@/constants';

const Searchbar = () => {
  const [manufacturer, setManufacturer] = useState('');
  const handleSearch = () => {}
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManuFacturer={setManufacturer}
        />
      </div>
    </form>
  );
}

export default Searchbar
