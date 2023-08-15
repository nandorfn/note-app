'use client'
import { useState } from "react";
import Link from "next/link";

const FloatingBtn: React.FC = () => {
  const [activeBtn, setActiveBtn] = useState(false);
  const handleClick = (): void => {
    setActiveBtn(!activeBtn);
  }

  const btnStyle: string = " rounded-full w-16 h-16 shadow-sm transform transition-transform duration-300 ease-in-out";

  return (
    <>
      {activeBtn &&
        <div className="sticky bottom-20 pb-10 left-full me-8 lg:me-20 rounded-t-full w-16 bg-white">
          <div className="flex flex-col gap-4">
            <Link href="/create/note">
              <button className={`${btnStyle} flex justify-center items-center`}>
                <i className="fa-solid fa-note-sticky fa-fw fa-lg"></i>
              </button>
            </Link>
            <button className={`${btnStyle} flex justify-center items-center`}>
              <i className="fa-solid fa-rectangle-list fa-fw fa-lg"></i>
            </button>
          </div>
        </div>
      }
      <div className="sticky left-full me-8 lg:me-20 bottom-10 bg-white rounded-full w-16 h-16 shadow-sm ">
        <button
          onClick={handleClick}
          className={`${btnStyle} ${activeBtn === false ? 'rotate-0' : 'rotate-45'}`}>
          <i className="fa-solid fa-plus fa-2xl"></i>
        </button>
      </div>
    </>
  );
};

export default FloatingBtn;