import React, { useState } from "react";
import Navbar from "../../components/template/Navbar";
import QuillComponent from "./components/QuillComponent";

const CreateBlog = () => {
  const [title, setTitle] = useState("");

  return (
    <div>
      <Navbar />
      {/* <QuillComponent /> */}
      <input type="text" onChange={(event) => setTitle(event.target.value)} />
      <div dangerouslySetInnerHTML={{ __html: title }} />
    </div>
  );
};

export default CreateBlog;
