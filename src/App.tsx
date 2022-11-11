import React from 'react';
import Upload from './components/Upload';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={"https://firebasestorage.googleapis.com/v0/b/upload-storage-c8.appspot.com/o/photos%2FIMG_6960.jpg?alt=media"} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Upload />
      </header>
    </div>
  );
}

export default App;
