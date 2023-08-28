'use client'
import axios from "axios";
import { useState, SyntheticEvent } from "react";
import { useRouter } from "next/navigation";
import AuthLayout from "../components/AuthLayout";
import Link from "next/link";


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
      <AuthLayout>
        <form className="p-8 max-w-xl flex flex-col gap-4 shadow-md bg-white rounded-3xl">
        <article className="text-start ">
            <h1 className="text-4xl font-medium antialiased">Register</h1>
            <p className="text-gray-600 text-sm">Please enter your details.</p>
          </article>
          
          <fieldset className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input className="p-2 rounded-md mt-1 bg-gray-200" onChange={(e) => setEmail(e.target.value)} type="email" name="email" />
          </fieldset>
          
          <fieldset className="flex flex-col">
            <label htmlFor="username">Username</label>
            <input className="p-2 rounded-md mt-1 bg-gray-200" onChange={(e) => setUsername(e.target.value)} type="text" name="username" />
          </fieldset>
          
          <fieldset className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input className="p-2 rounded-md mt-1 bg-gray-200" onChange={(e) => setPassword(e.target.value)} type="password" name="password" />
          </fieldset>

          <button className="w-100 bg-black rounded-md p-2 text-white mt-4" onClick={handleSubmit} type="submit">Sign Up</button>
          <p className="text-sm text-gray-600">Already have an account?
            <Link href='/'>
              <button className="text-black ms-1" type="submit"> Sign In here</button>
            </Link>
          </p>
        </form>
      </AuthLayout>
    </>
  );
};

export default Page;