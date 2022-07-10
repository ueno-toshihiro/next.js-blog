import * as React from 'react';
import { useState } from 'react';
import Layout from '@/components/layout';
import ImageUploader from '@/components/ui/image-uploader';

export default function Index(): JSX.Element {
  const [isSingle, setIsSingle] = useState(false);

  return (
    <Layout>
      Image uploader
      <br />
      <ImageUploader />
    </Layout>
  );
}
