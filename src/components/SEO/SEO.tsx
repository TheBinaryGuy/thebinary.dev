import { ReactNode } from 'react';

export interface SEOProps {
    children?: ReactNode;
    title?: string;
}

const SEO = ({ children, title }: SEOProps) => {
    return (
        <>
            <meta
                property='og:title'
                content={title ? `${title} | TheBinaryGuy` : 'TheBinaryGuy'}
            />

            <meta
                name='twitter:title'
                content={title ? `${title} | TheBinaryGuy` : 'TheBinaryGuy'}
            />

            {children && children}
        </>
    );
};

export default SEO;
