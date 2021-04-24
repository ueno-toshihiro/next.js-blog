import * as React from 'react';
import { useState } from 'react';
import Layout from '@/components/layout';
import PDFtoImage from '@/components/pdf2image';
import PDFtoImages from '@/components/pdf2images';

export default function Index(): JSX.Element {
  const [isSingle, setIsSingle] = useState(false);

  return (
    <Layout>
      PDF to Canvas
      <div>{isSingle ? 'PDF ページめくり' : 'PDF 一覧表示'}</div>
      <br />
      {isSingle && <PDFtoImage />}
      {!isSingle && <PDFtoImages />}
      <button disabled={isSingle} onClick={() => setIsSingle(true)}>
        PDF ページめくり
      </button>
      <button disabled={!isSingle} onClick={() => setIsSingle(false)}>
        PDF 一覧表示
      </button>
    </Layout>
  );
}
