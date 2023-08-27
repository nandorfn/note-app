import Link from "next/link";

const Home = () => {

  return (
    <>
      <section className="grid grid-cols-2 w-screen h-screen items-center">
        <div className="grid-cols-6 flex justify-center">
          <form className="p-8 max-w-xl flex flex-col gap-4 shadow-md bg-white">
            <article className="text-start ">
              <h1 className="text-4xl">Welcome back</h1>
              <p className="text-gray-600 text-sm">Welcome back! Please enter your details.</p>
            </article>

            <fieldset className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input className="p-2 rounded-md mt-1" type="email" name="email" placeholder="Please enter your email" />
            </fieldset>

            <fieldset className="flex flex-col">
              <label htmlFor="password">Password</label>
              <input className="p-2 rounded-md mt-1" type="password" name="password" placeholder="Please enter your password"/>
            </fieldset>
            <button className="w-100 bg-black rounded-md p-2 text-white" type="submit">Sign In</button>

            <p className="text-sm text-gray-600">Don&apos;t have an account?
              <Link href='/signup'>
                <button className="text-black ms-1" type="submit"> Sign up for free</button>
              </Link>
            </p>

          </form>
        </div>
        <article className="grid-cols-6 bg-white h-screen flex items-center justify-center p-8">
          <h1 className="text-5xl max-w-xl">Simplifying Productivity with Refined Note and Task Integration.</h1>
        </article>
      </section>
    </>
  )
}

export default Home;