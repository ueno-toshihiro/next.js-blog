import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
const PdfViewer = dynamic(() => import('../lib/pdfViewer'), { ssr: false });

const Label = styled.div``;
const Input = styled.input`
  // display: none;
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
  const [pageNum, setPageNum] = useState(1);
  const [docInfo, setDocInfo] = useState({ numPages: 0 });
  console.log(docInfo);

  return (
    <div>
      {files && (
        <PdfViewer
          file={files[0]}
          width="500"
          pageNumber={pageNum}
          setTotalPageNum={setDocInfo}
        />
      )}

      <Input type="file" onChange={e => onChange(e, setFileName, setFiles)} />

      <Label>{fileName}</Label>
      <p>Page {pageNum} of {docInfo.numPages}</p>

      <button disabled={pageNum <= 1} onClick={() => setPageNum(pageNum - 1)}>Prev</button>
      <button disabled={docInfo.numPages <= pageNum} onClick={() => setPageNum(pageNum + 1)}>Next</button>
    </div>
  );
}
