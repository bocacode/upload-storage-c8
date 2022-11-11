import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getStorage, ref, StorageReference, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCq45ZNvjsD0EZcSrU-HAlVkcFX06rh5Z0",
  authDomain: "upload-storage-c8.firebaseapp.com",
  projectId: "upload-storage-c8",
  storageBucket: "upload-storage-c8.appspot.com",
  messagingSenderId: "759960519965",
  appId: "1:759960519965:web:2d7e89d8b5f93ae0eb8df4"
};

export default function Upload() {
  const [selectedFile, setSelectedFile] = useState<File | undefined>();
  console.log({selectedFile});
  const handleUpload = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    if(!selectedFile) {
      alert("Please select a file first!")
      return
    }
    // connect to firebase project
    const app = initializeApp(firebaseConfig);
    // connect to our storage bucket
    const storage = getStorage(app);
    // create a reference to our file in storage
    const filename = selectedFile?.name;
    const imageRef: StorageReference = ref(storage, 'photos/' + filename);
    // (Todd's quick cheat) create the url from reference
    const url = `https://firebasestorage.googleapis.com/v0/b/upload-storage-c8.appspot.com/o/photos%2F${filename}?alt=media`
    // upload file to bucket
    uploadBytes(imageRef, selectedFile);
    // add an await or .then and then update our database with url
  }
  return (
    <form onSubmit={handleUpload}>
      <input type="file" name="photo"
        onChange={(e: React.FormEvent<HTMLInputElement> | any) => setSelectedFile(e.currentTarget.files[0])}
        // value={selectedFile.name}
        />
      <button type="submit">Upload</button>
    </form>
  )
}