'use client'
import axios from "axios";
import { useState, SyntheticEvent } from "react";
import { useRouter } from "next/navigation";


const Page: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  
  const router = useRouter();
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await axios.post("/api/signup", {
        email: email,
        username: username,
        password: password
    });
    setEmail('');
    setUsername('');
    setPassword('');
    router.push('/');
};

    return (
        <>
          <form className="flex flex-col">
            <h1>Sign Up</h1>
            
            <label htmlFor="email">Email</label>
            <input onChange={(e) => setEmail(e.target.value)} type="email" name="email"/>
            
            <label htmlFor="username">Username</label>
            <input onChange={(e) => setUsername(e.target.value)} type="text" name="username" />
            
            <label htmlFor="password">Password</label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" />
            
            <button onClick={handleSubmit} type="submit">Sign Up</button>
          </form>
        </>
    );
};

export default Page;