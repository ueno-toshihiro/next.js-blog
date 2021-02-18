import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfViewer = ({ file, width, pageNumber, setTotalPageNum }) => {
  return (
    <>
      <Document file={file} onLoadSuccess={setTotalPageNum}>
        <Page pageNumber={pageNumber} width={width}/>
      </Document>
    </>
  )
};

export default PdfViewer;
