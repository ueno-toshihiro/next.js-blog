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

  const onDropFiles = (acceptedFiles: File[]) => {
    const uploadFiles = acceptedFiles.map((file) => {

      // NOTE: About BLOB https://ja.javascript.info/blob
      /**
       * URL.createObjectURL により生成された各 URL に対して、ブラウザは url → blob のマッピングを内部に格納します。そのため、url は短いですが、blob にアクセスすることができます。
       * 生成された url (とそれへのリンク)は現在のドキュメント内で、かつ開いている間のみ有効です。それにより、<img>, <a> 、基本的に url を想定するあらゆるオブジェクトで blob を参照することができます。
       * しかし、副作用もあります。blob のマッピングがある間、blob 自身はメモリ内に存在し続けます。ブラウザはそれを解放することはできません。
       * マッピングは、ドキュメントがアンロードされると自動的にクリアされ、blob もそのとき解放されます。しかしアプリケーションの寿命が長ければ、すぐにはそれは起きません。
       * したがって、URL を作成すると、それ以上必要なくなっても、blob はメモリに溜まります。
       * URL.revokeObjectURL(url) は内部のマッピングから参照を削除します。これにより blob が削除され(他に参照がない場合)、メモリを解放することができます。
       * 最後の例では、blob は即時ダウンロードのために、一度だけ使われることを意図しているので、すぐに URL.revokeObjectURL(link.href) を呼び出します。
       * しかし、クリック可能な HTML リンクのある前の例では、URL.revokeObjectURL(link.href) を呼び出しません。なぜなら、これは blob url を無効にするからです。失効後は、マッピングが削除されているので、url は機能しなくなります。
       */
      const createObjectURL = (window.URL || window.webkitURL).createObjectURL;

      if (acceptedFiles.length != 0) {
        const images = acceptedFiles.map((file) => createObjectURL(file))
        setImageUrls(images);
      };

      return {
        file,
        id: v4(),
        uploadProgress: 0,
      };
    });
    
    console.log('@@', { uploadFiles });
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

  React.useEffect(() => {
    return () => {
      imageUrls.forEach((file) => (window.URL || window.webkitURL).revokeObjectURL(file));
    };
  }, [imageUrls]);

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
