// app/components/BottomNavbar.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import styles from './BottomNavbar.module.css';

export default function BottomNavbar() {
  return (
    <footer className={styles.bottomNavbar}>
      <Link href="/">Home</Link>
      <Link href="/team">Squadra</Link>
      <Link href="/market">Mercato</Link>
    </footer>
  );
}
