import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1, shrink-to-fit=no'
                />

                <meta charSet='utf-8' />
                <meta httpEquiv='x-ua-compatible' content='ie=edge' />

                <meta
                    httpEquiv='Content-Type'
                    content='text/html; charset=utf-8'
                />

                <meta name='robots' content='index, follow' />

                <meta name='theme-color' content='#6366f1' />

                <meta name='author' content='TheBinaryGuy' />
                <meta name='description' content='Home of TheBinaryGuy.' />
                <meta
                    name='keywords'
                    content='personal blog, thebinaryguy, 81nary, thebinarydev, thebinary.dev, software development, app development, web development'
                />

                <meta
                    property='og:description'
                    content='Home of TheBinaryGuy.'
                />
                <meta property='og:type' content='Personal Blog' />
                <meta property='og:url' content='https://thebinary.dev' />
                <meta
                    property='og:image'
                    content='https://thebinary.dev/tbg.jpg'
                />

                <meta name='twitter:card' content='summary' />
                <meta name='twitter:creator' content='TheBinaryGuy' />
                <meta
                    name='twitter:description'
                    content='Home of TheBinaryGuy.'
                />

                <title>TheBinaryGuy</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default App;
