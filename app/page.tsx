'use client';
import {useRouter} from 'next/navigation';
import {useEffect} from 'react';

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/feedback');
        }, 1500);
    }, []);

    return (
        <main>
            <h1 className="text-3xl grid place-content-center min-h-screen">
                Go Contact Us...
            </h1>
        </main>
    );
}
