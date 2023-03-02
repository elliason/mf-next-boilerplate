import { Button } from '@mf-project/ui';
import Head from 'next/head';

export default function Web() {
    return (
        <div>
            <Head>
                <title>Web Project</title>
            </Head>
            <h1>Web</h1>
            <Button
                onClick={() => {
                    console.log('rr');
                }}
            >
                <span>Klikni na mě</span>
            </Button>
        </div>
    );
}
