import { createRef, useState } from 'react';
import styled from 'styled-components';

import dynamic from 'next/dynamic';
const PdfViewer = dynamic(() => import('../lib/pdfViewer'), { ssr: false });

const Label = styled.div``;
const Input = styled.input`
  // display: none;
`;
const HideViewer = styled.div`
  display: none;
`;

const onChange = (event, setFileName, setFile) => {
  const targetName = event.target.files.item(0).name;
  const files = event.target.files;
  setFileName(targetName);
  setFile(files);
}

const getImages = (e, ref, setImages) => {
  e.preventDefault();

  if (!ref.current) return;

  const canvas = ref.current.querySelectorAll('canvas');

  const images = [...canvas].map((cvs) => {
    const png = cvs.toDataURL();
    return png;
  })

  console.log({images});
  setImages(images);
}

export default function Index(): JSX.Element {
  const [files, setFiles] = useState(null);
  const [fileName, setFileName] = useState('');
  const [docInfo, setDocInfo] = useState({ numPages: 0 });
  const [images, setImages] = useState(null);
  const ref = createRef();

  return (
    <div>
      {files && (
        <PdfViewer
          file={files[0]}
          width={100}
          pageNumber={1}
          setTotalPageNum={setDocInfo}
          isSingle={false}
          inputRef={ref}
        />
      )}

      <p>Base64 image list</p>
      {images && images.map((image, i) => {
        return <div key={i}><img src={image} width="100px" /></div>;
      })}

      <Input type="file" onChange={e => onChange(e, setFileName, setFiles)} />

      <Label>{fileName}</Label>
      <p>Page {docInfo.numPages}</p>

      <button onClick={(e) => getImages(e, ref, setImages)}>画像に変換する</button>
    </div>
  );
}
