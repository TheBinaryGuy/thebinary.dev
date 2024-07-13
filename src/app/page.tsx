import { ThemeToggle } from '@/components/theme-toggle';

export default function Page() {
    return (
        <div className='container flex h-full flex-col items-center justify-center gap-4'>
            <h1 className='text-4xl font-semibold'>Hello, world!</h1>
            <ThemeToggle />
        </div>
    );
}
