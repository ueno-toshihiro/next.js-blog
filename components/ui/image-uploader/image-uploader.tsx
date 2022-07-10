import * as React from 'react';
import { useDropzone } from 'react-dropzone';
import { v4 } from 'uuid';

const MAX_FILE_SIZE = 100000000;

const borderNormalStyle = {
  border: "1px dotted #888"
};
const borderDragStyle = {
  border: "1px solid #00f",
  transition: 'border .5s ease-in-out'
};

const ImageUploader: React.FC = () => {
  const [imageUrls, setImageUrls] = React.useState([]);

  const onDropFiles = async (acceptedFiles: File[]) => {
    const promisesBase64 = acceptedFiles.map((file) => {
      // NOTE: About BLOB https://ja.javascript.info/blob
      /**
       * URL.createObjectURL の代替は blob を base64 エンコードされた文字列に変換する方法です。
       * このエンコーディングは、0 から 64 までの ASCII コードを用いて、バイナリデータを安全で “読み出し可能な” 文字列として表現します。そしてより重要なことは、“data-url” でこのエンコーディングが使用できることです。
       * data url は data:[<mediatype>][;base64],<data> の形式です。このような url は “通常の” url と同等に、あらゆる場所で使用することができます。
       */
      let blob = new Blob([file], { type: file.type });
      let reader = new FileReader();
      reader.readAsDataURL(blob); // blob を base64 へ変換し onload を呼び出します

      return new Promise((resolve) => {
        reader.onload = function() {
          resolve(reader.result);
        };
      });
    });

    const images = await Promise.all(promisesBase64);
    setImageUrls(images);
  };

  const { getRootProps, getInputProps, isDragActive, open, acceptedFiles } = useDropzone({
    onDrop: onDropFiles
  });

  const files = React.useMemo(() => 
    acceptedFiles.map((file: File) => (
      <li key={file.name}>{file.name} - {file.size} bytes</li>
    )
  ), [acceptedFiles]);

  const style = React.useMemo(() => (
      { ...(isDragActive ? borderDragStyle : borderNormalStyle)}
  ), [isDragActive]);

  return (
    <>
    
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the files here ...</p> :
            <p>Drag 'n' drop some files here, or click to select files</p>
        }
      </div>
      <button type="button" onClick={open}>Select files</button>

      <aside>
          <h4>Files</h4>
          <ul>{files}</ul>
          {imageUrls && imageUrls.map((img,  i) => <img key={i} src={img} />)}
      </aside>
    </>
  );
};

export default ImageUploader;
