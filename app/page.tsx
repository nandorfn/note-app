'use client'
import axios, { AxiosError } from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, SyntheticEvent } from "react";
import AuthLayout from "./components/AuthLayout";


const Home = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [invalidUser, setInvalidUser] = useState('');
  const [invalidPassword, setInvalidPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();
  const handleSignIn = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/signin', { email, password });
      const { token } = response.data;

      document.cookie = `authToken=${token}; path=/;`;
      if (!token) {
        setError("Please enter a valid data");
      } else {
        router.push('/dashboard')
      }
    } catch (error: any) {
      if (error.response) {
        const errorMessage = error.response.data.error;
        if (errorMessage === 'User not found') {
          setInvalidUser(errorMessage);
        }

        else if (errorMessage === 'Invalid password') {
          setInvalidPassword(errorMessage);
        } else {
          setError(errorMessage);
        }
      } else {
        setError('An error occurred while processing your request.');
      }
    }
  }

  return (
    <>
      <AuthLayout>
        <form className="p-8 max-w-xl flex flex-col gap-4 shadow-md bg-white rounded-3xl">
          <article className="text-start ">
            <h1 className="text-4xl">Welcome back</h1>
            <p className="text-gray-600 text-sm">Welcome back! Please enter your details.</p>
          </article>

          <fieldset className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input onChange={(e) => setEmail(e.target.value)} className="p-2 rounded-md mt-1 bg-gray-200 " type="email" name="email" placeholder="Please enter your email" />
            <p className="text-red-500">{invalidUser}</p>
          </fieldset>

          <fieldset className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input onChange={(e) => setPassword(e.target.value)} className="p-2 rounded-md mt-1 bg-gray-200 " type="password" name="password" placeholder="Please enter your password" />
            <p className="text-red-500">{invalidPassword}</p>
          </fieldset>
          <button onClick={handleSignIn} className="w-100 bg-black rounded-md p-2 text-white" type="submit">Sign In</button>
          <p className="text-red-500">{error}</p>

          <p className="text-sm text-gray-600">Don&apos;t have an account?
            <Link href='/signup'>
              <button className="text-black ms-1" type="submit"> Sign up for free</button>
            </Link>
          </p>

        </form>
      </AuthLayout>

    </>
  )
}

export default Home;