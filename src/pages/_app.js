import React from 'react';
import UploadFile from '../components/UploadFile'; // ✅ Correct path now

function App() {
  return (
    <div className="App">
      <h1>Firebase File Upload</h1>
      <UploadFile />
    </div>
  );
}

export default App;
