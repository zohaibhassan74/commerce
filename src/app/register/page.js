'use client'
import Image from 'next/image';
import { useState } from 'react';

export default function RegisterPage(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit(e){
        e.preventDefault()
        await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            }),
            headers:{'content-type': 'application/json'}
        })
    }


    return(
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-4">Register</h1>
            <form className="block max-w-xs mx-auto" onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type='password' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Register</button>
                <div className="my-4 text-center text-gray-500">or login with</div>
                <button className='flex gap-4 justify-center'>
                    <Image src="/google.png" alt="google" width={20} height={20}/>
                    Login with Google
                    </button>
            </form>
            <div>
                
            </div>
        </section>
    )
}