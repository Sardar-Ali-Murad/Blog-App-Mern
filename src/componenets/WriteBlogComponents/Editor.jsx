// import React from "react";
// import { Editor } from "@tinymce/tinymce-react";
// // import { Global } from "@emotion/core";

// const EditorCom = () => {
//   return (
//     <div>
//       <Editor
//         // apiKey="y7gnmtbsaxnjbgh3405ioqbdm24eit5f0ovek49w8yvq5r9q"
//         initialValue=""
//         init={{
//           branding: false,
//           height: 400,
//           menubar: true,
//           plugins:
//             "print preview paste searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern",
//           toolbar:
//             "formatselect | bold italic underline strikethrough | forecolor backcolor blockquote | link image media | alignleft aligncenter alignright alignjustify | numlist bullist outdent indent | removeformat",
//           image_advtab: true,
//         }}
//         onChange={(e) => console.log(e.target.iframeHTML)}
//       />
//     </div>
//   );
// };

// export default EditorCom;



// import ReactQuill from "react-quill";

// export default function Editor({value,onChange}) {
//   const modules = {
//     toolbar: [
//       [{ header: [1, 2, false] }],
//       ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//       [
//         { list: 'ordered' },
//         { list: 'bullet' },
//         { indent: '-1' },
//         { indent: '+1' },
//       ],
//       ['link', 'image'],
//       ['clean'],
//     ],
//   };
//   return (
//     <div className="content">
//     <ReactQuill
//       // value={value}
//       theme={'snow'}
//       // onChange={onChange}
//       modules={modules}
//        />
//     </div>
//   );
// }



import React, { useState } from "react";
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css'; 

function HtmlEditor({content,setContent}){
    const { quill, quillRef } = useQuill();
    let [value,setValue]=React.useState("")

    React.useEffect(() => {
        if (quill) {
          quill.on('text-change', () => {
            setValue(quillRef.current.firstChild.innerHTML)
          });
        }
      }, [quill]);


      React.useEffect(()=>{
         setContent(value)
      },[value])

      
    return(
        <div>
            <div style={{ width:"100%", height: 300 }}>
                <div ref={quillRef} />
            </div>
        </div>
    );
}
export default HtmlEditor;