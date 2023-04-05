import React, { useState } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

function HtmlEditor({ content, setContent }) {
  const { quill, quillRef } = useQuill();
  let [value, setValue] = React.useState("");

  React.useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        setValue(quillRef.current.firstChild.innerHTML);
      });
    }
  }, [quill]);

  React.useEffect(() => {
    setContent(value);
  }, [value]);

  return (
    <div>
      <div style={{ width: "100%", height: 300 }}>
        <div ref={quillRef} />
      </div>
    </div>
  );
}
export default HtmlEditor;
