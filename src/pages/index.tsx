import { Layout, SEO } from '@/components/index';
import Head from 'next/head';
import { useState } from 'react';

const Index = () => {
    const [title, setTitle] = useState('Home | TheBinaryGuy');

    return (
        <>
            <Head>
                <SEO title={title} />
                <title>{title}</title>
            </Head>
            <Layout>
                <h1 className='h-full grid place-items-center text-4xl font-bold'>
                    Hello, world!
                </h1>
            </Layout>
        </>
    );
};

export default Index;
