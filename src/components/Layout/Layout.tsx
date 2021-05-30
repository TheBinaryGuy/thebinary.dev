import { ReactNode } from 'react';

export interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return <div className='h-full'>{children}</div>;
};

export default Layout;
