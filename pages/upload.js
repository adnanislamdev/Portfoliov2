import Head from 'next/head';
import Layout from '../components/Layout';

export default function Upload() {
  return (
    <Layout>
      <Head>
        <title>Upload - Personal Website</title>
        <meta name="description" content="Upload content to the database" />
      </Head>

      <div className="page-container">
        <div className="container">
          <h1 className="page-title">Upload</h1>
          <div className="card" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p>This page is not in use. All content is hardcoded in the website files.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

