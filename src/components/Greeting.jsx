import { useState } from 'preact/hooks';

export default function Greeting({ messages }) {
    const randomMessage = () => messages[(Math.round(Math.random() * ( messages.length - 1 ) ))];

    const [greeting, setGreeting] = useState(messages[0])

    return (
        <div>
            <h3>{ greeting }! Thank you for visiting!</h3>
            <button onClick={() => setGreeting(randomMessage())}>New greeting</button>
        </div>
    )
}