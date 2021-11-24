import Link from 'next/link'
import type { NextPage, GetServerSideProps } from 'next'

const Home: NextPage = () => {
  return (
    <div className='flex flex-col items-center justify-center space-y-3 font-light text-gray-300'>
      <div className='w-1/2 text-center bg-red-900 transform skew-x-37'>
        <Link href='/login'>
          <a className='block p-2 transform -skew-x-37'>login</a>
        </Link>
      </div>
      <div className='w-1/2 text-center bg-red-900 transform skew-x-37'>
        <Link href='/signup'>
          <a href='/signup' className='block p-2 transform -skew-x-37'>signup</a>
        </Link>
      </div>
    </div>
  )
}

export default Home
