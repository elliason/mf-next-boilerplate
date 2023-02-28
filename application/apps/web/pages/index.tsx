import { Button } from '@mf-project/ui';

export default function Web() {
    return (
        <div>
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
