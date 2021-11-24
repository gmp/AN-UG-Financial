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
      <div className='flex flex-col items-center justify-center min-h-screen bg-gray-500'>
        <header className='px-6 mb-4'>
          <img src='https://gmp.imgix.net/ANUG_logo_transparent.png' />
        </header>
        <main className='container'>{children}</main>
      </div>
    </>
  )
}