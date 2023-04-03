import React from "react";
import { Editor } from "@tinymce/tinymce-react";
// import { Global } from "@emotion/core";

const EditorCom = () => {
  return (
    <div>
      <Editor
        // apiKey="y7gnmtbsaxnjbgh3405ioqbdm24eit5f0ovek49w8yvq5r9q"
        initialValue=""
        init={{
          branding: false,
          height: 400,
          menubar: true,
          plugins:
            "print preview paste searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern",
          toolbar:
            "formatselect | bold italic underline strikethrough | forecolor backcolor blockquote | link image media | alignleft aligncenter alignright alignjustify | numlist bullist outdent indent | removeformat",
          image_advtab: true,
        }}
        onChange={(e) => console.log(e.target.iframeHTML)}
      />
    </div>
  );
};

export default EditorCom;
