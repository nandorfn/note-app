import { ReactNode } from "react";

const AuthLayout = ({children}: {children: ReactNode}) => {
    return (
        <>
          <section className="grid grid-cols-1 lg:grid-cols-2 w-screen h-screen items-center">
        <div className="grid-cols-12 order-2 flex justify-center -mt-3">
          {children}
        </div>
        <article className="grid-cols-12 order-1 bg-white h-fit lg:h-screen flex items-start lg:items-center justify-center p-8">
          <h1 className="text-5xl max-w-xl">Simplifying Productivity with Refined Note and Task Integration.</h1>
        </article>
      </section>
        </>
    );
};

export default AuthLayout;