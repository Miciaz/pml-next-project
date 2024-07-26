// app/components/TopNavbar.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './TopNavbar.module.css';

export default function TopNavbar() {
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <header className={styles.topNavbar}>
      <div className={styles.hamburgerMenu}>
        <Image src="/menu.svg" alt="Menu" width={24} height={24} />
      </div>
      <div className={styles.centerButton}>
        <Link href="/">Home</Link>
      </div>
      <div className={styles.searchIcon} onClick={toggleSearch}>
        <Image src="/search.svg" alt="Search" width={24} height={24} />
      </div>
      {searchOpen && (
        <div className={styles.searchBox}>
          <input type="text" placeholder="Search..." />
        </div>
      )}
    </header>
  );
}
