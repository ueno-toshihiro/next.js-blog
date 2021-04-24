/* eslint-disable react/prop-types */
/**
 * initial pdf to image component
 * usage:
 * components/pdf
 */
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

type Props = {
  file: any;
  width?: number;
  pageNumber: number;
  setTotalPageNum: ({ numPages: number }) => void;
  isSingle?: boolean;
  inputRef?: any;
  fileName?: string;
  onPageRenderSuccess?: (d: { _pageIndex: number }) => void;
};

const PdfViewer: React.FC<Props> = ({
  file,
  width = null,
  pageNumber,
  setTotalPageNum,
  isSingle = true,
  inputRef = null,
  fileName = '',
  onPageRenderSuccess = null,
}) => {
  const [pageInfo, setPageInfo] = useState<{ numPages: number } | null>(null);
  const [pageArr, setPageArr] = useState([]);

  useEffect(() => {
    if (!pageInfo) return;

    const arr = [];
    for (let i = 0; i < pageInfo.numPages; i++) {
      arr[i] = i;
    }
    setPageArr(arr);
    setTotalPageNum(pageInfo);
  }, [pageInfo]);

  // ページめくり
  if (isSingle) {
    return (
      <Document file={file} onLoadSuccess={setTotalPageNum}>
        <Page pageNumber={pageNumber} width={width} />
      </Document>
    );
  }

  // 一覧表示
  return (
    <Document file={file} onLoadSuccess={setPageInfo} inputRef={inputRef}>
      {pageArr.map((i) => {
        return (
          <Page
            key={i}
            pageNumber={i + 1}
            width={width}
            textContent={'sss'}
            onRenderSuccess={onPageRenderSuccess}
          >
            <div>
              {fileName} No.{i + 1}
            </div>
          </Page>
        );
      })}
    </Document>
  );
};

export default PdfViewer;
