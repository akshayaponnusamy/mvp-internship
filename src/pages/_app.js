// src/pages/_app.js
import React from 'react';
import '../styles/globals.css';
import UploadFile from '../components/UploadFile'; // ✅ Updated path
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <h1>🎓 Student Grievance App</h1>
      <UploadFile />
      <Analytics />
    </>
  );
}

export default MyApp;
