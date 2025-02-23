import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/tools/')({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <div className='container mx-auto max-w-3xl px-4 py-8'>
            <h1 className='mb-4 text-2xl font-bold'>Tools</h1>
            <ul className='space-y-2'>
                <li>
                    <Link
                        to='/tools/sql-explainer'
                        className='text-primary hover:text-primary/80 underline'>
                        SQL Explainer
                    </Link>
                    <p className='text-muted-foreground text-sm'>
                        Get plain English explanations for SQL queries.
                    </p>
                </li>
            </ul>
        </div>
    );
}
