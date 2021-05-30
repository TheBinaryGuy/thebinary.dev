import Document, {
    DocumentContext,
    Head,
    Html,
    Main,
    NextScript
} from 'next/document';

class CustomDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang='en'>
                <Head>
                    <link
                        rel='shortcut icon'
                        href='favicon.ico'
                        type='image/x-icon'
                    />
                    <link rel='preconnect' href='https://fonts.gstatic.com' />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap'
                        rel='stylesheet'
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default CustomDocument;
