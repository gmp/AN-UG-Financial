import Head from 'next/head'

export default function Layout({ children }) {
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