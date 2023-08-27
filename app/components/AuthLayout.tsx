import { ReactNode } from "react";

const AuthLayout = ({children}: {children: ReactNode}) => {
    return (
        <>
          <section className="grid grid-cols-2 w-screen h-screen items-center">
        <div className="grid-cols-6 flex justify-center">
          {children}
        </div>
        <article className="grid-cols-6 bg-white h-screen flex items-center justify-center p-8">
          <h1 className="text-5xl max-w-xl">Simplifying Productivity with Refined Note and Task Integration.</h1>
        </article>
      </section>
        </>
    );
};

export default AuthLayout;