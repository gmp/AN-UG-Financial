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
      <header>
        <img src='https://gmp.imgix.net/logo_transparent.png' />
      </header>
      <main className='container'>{children}</main>
    </>
  )
}