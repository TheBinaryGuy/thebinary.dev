import { TooltipProvider } from '@/components/ui/tooltip';
import appCss from '@/styles/app.css?url';
import twCss from '@/styles/tailwindcss-animate.css?url';

import '@fontsource-variable/inter';
import '@fontsource-variable/jetbrains-mono';

import { createRootRoute, HeadContent, Outlet, Scripts } from '@tanstack/react-router';
import { lazy, Suspense, type ReactNode } from 'react';
import { Toaster } from 'sonner';

const TanStackRouterDevtools =
    process.env.NODE_ENV === 'production'
        ? () => null
        : lazy(() =>
              import('@tanstack/router-devtools').then(res => ({
                  default: res.TanStackRouterDevtools,
              }))
          );

export const Route = createRootRoute({
    head: () => ({
        meta: [
            {
                charSet: 'utf-8',
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                title: '81NARY',
            },
        ],
        links: [
            {
                rel: 'stylesheet',
                href: appCss,
            },
            {
                rel: 'stylesheet',
                href: twCss,
            },
        ],
        // scripts: import.meta.env.DEV
        //     ? [
        //           {
        //               type: 'module',
        //               children: `import RefreshRuntime from "/_build/@react-refresh";
        //   RefreshRuntime.injectIntoGlobalHook(window)
        //   window.$RefreshReg$ = () => {}
        //   window.$RefreshSig$ = () => (type) => type`,
        //           },
        //       ]
        //     : [],
    }),
    component: RootComponent,
});

function RootComponent() {
    return (
        <RootDocument>
            <Outlet />
        </RootDocument>
    );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <html lang='en' dir='ltr' className='h-full scroll-smooth'>
            <head>
                <HeadContent />
            </head>
            <body className='bg-background text-foreground h-full font-sans antialiased'>
                <TooltipProvider>
                    {children}
                    <Toaster />
                </TooltipProvider>
                <Scripts />
                <Suspense>
                    <TanStackRouterDevtools />
                </Suspense>
            </body>
        </html>
    );
}
