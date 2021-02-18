import { useState } from 'react';
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

export default function Index(): JSX.Element {
  const [files, setFiles] = useState(null);
  const [fileName, setFileName] = useState('');
  const [docInfo, setDocInfo] = useState({ numPages: 0 });

  return (
    <div>
      {files && (
        <PdfViewer
          file={files[0]}
          width="500"
          pageNumber={1}
          setTotalPageNum={setDocInfo}
          isSingle={false}
        />
      )}

      <Input type="file" onChange={e => onChange(e, setFileName, setFiles)} />

      <Label>{fileName}</Label>
      <p>Page {docInfo.numPages}</p>
    </div>
  );
}
