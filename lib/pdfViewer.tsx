/**
 * initial pdf to image component
 * usage:
 * components/pdf
 */
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import { useEffect, useState } from 'react';

const PdfViewer = ({ file, width, pageNumber, setTotalPageNum, isSingle }) => {
  const [pageInfo, setPageInfo] = useState(null);
  const [pageArr, setPageArr] = useState([]);


  useEffect(() => {
    if (!pageInfo) return;

    const arr = [];
    for (let i=0; i<pageInfo.numPages; i++) {
      arr[i] = i;
    }
    setPageArr(arr);
  }, [pageInfo]);

  // ページめくり
  if (isSingle) {
    return (
      <Document file={file} onLoadSuccess={setTotalPageNum}>
        <Page pageNumber={pageNumber} width={width}/>
      </Document>
    )
  }

  // 一覧表示
  return (
    <Document file={file} onLoadSuccess={setPageInfo}>
      {pageArr.map((i) => <Page pageNumber={i + 1} width={width} />)}
    </Document>
  )
};

export default PdfViewer;
