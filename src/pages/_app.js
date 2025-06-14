// src/App.js
import React from 'react';
import UploadFile from './components/UploadFile';

// ✅ 1. Import Vercel Analytics
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>🎓 Student Grievance App</h1>

      {/* ✅ Show the Upload Form */}
      <UploadFile />

      {/* ✅ Enable Vercel Analytics */}
      <Analytics />
    </div>
  );
}

export default App;
