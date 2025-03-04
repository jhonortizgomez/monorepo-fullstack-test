import Image from "next/image"

export const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 flex w-full justify-evenly items-center">
        <Image src={"/icons/logo.svg"} width={ 50 } height={ 50 } alt="Logo"/>

        <a
          href="https://github.com/jhonortizgomez/monorepo-fullstack-test"
          rel="noreferrer"
          target="_blank"
          className="text-gray-700 transition hover:text-gray-700/75 flex items-center gap-3">
          <Image src={"/icons/github.svg"} width={ 30 } height={ 30 } alt="Github"/>
          <span className="">GitHub</span>
        </a>
      </div>
    </footer>
  )
}