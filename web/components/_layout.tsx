import { ReactElement } from 'react'
import Head from 'next/head'

type LayoutProps = {
  children: ReactElement
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>AN/UG Financial</title>
        <link rel='icon' href='https://gmp.imgix.net/favicon.png' />
      </Head>
      <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-t from-gray-600 to-gray-400'>
        <header className='px-6 mb-4'>
          <a href='/' className='block'>
            <img src='https://gmp.imgix.net/ANUG_logo_transparent.png' />
          </a>
        </header>
        <main className='container'>{children}</main>
        <footer className='fixed bottom-2 font-light text-xs text-gray-300'>
          <p>&copy;2021 | AN/UG Financial</p>
        </footer>
      </div>
    </>
  )
}