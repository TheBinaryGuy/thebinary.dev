import { Layout, SEO } from '@/components/index';
import Head from 'next/head';
import { useState } from 'react';

const FreeOneToOne = () => {
    const [title, setTitle] = useState('Free 1 to 1 Training | TheBinaryGuy');

    return (
        <>
            <Head>
                <SEO title={title} />
                <title>{title}</title>
            </Head>
            <Layout>
                <h1 className='h-full grid place-items-center'>WiP...</h1>
            </Layout>
        </>
    );
};

export default FreeOneToOne;
