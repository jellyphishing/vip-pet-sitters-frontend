import React, { useState } from "react";
import axios from "axios";

export const FileUpload = () => {
  const [file, setFile] = useState();

  const saveFile = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };
  const uploadFile = async () => {
    console.log(file);
    const formData = new FormData();
    formData.append("formFile", file);

    try {
      const res = await axios.post("https://localhost:5001/api/file", formData);
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
  };
  return (
    <>
      <input type="file" onChange={saveFile} />
      <input type="button" value="upload" onClick={uploadFile} />
    </>
  );
};
