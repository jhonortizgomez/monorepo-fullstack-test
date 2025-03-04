import Image from "next/image";
import { HandleCart } from "../Cart/HandleCart";

export const Header = () => {
  return (
    <header className="bg-white">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Image src={"/icons/logo.svg"} width={50} height={50} alt="Logo" color="red" />
        <div className="flex items-center gap-4">
          <HandleCart />
        </div>
      </div>
    </header>
  );
};