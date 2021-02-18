import Layout from '@/components/layout';
import PDFtoImages from '@/components/pdf'

export default function Index(): JSX.Element {
  return (
    <Layout>
      PDF to Images
      <br />
      <PDFtoImages />
    </Layout>
  );
}
