import type { NextPage } from 'next'

const Login: NextPage = () => {
  return (
    <form className='flex flex-col space-y-3 items-center align-middle m-auto w-3/4 font-light font-sm text-gray-300'>
      <div className='block w-full'>
        <label htmlFor='username'>Username</label>
        <input type='text' id='username' className='
                    mt-0
                    block
                    w-full
                    px-0.5
                    bg-transparent
                    border-0 border-b border-gray-300
                    focus:ring-0 focus:border-black'
          name='username' />
      </div>
      <div className='block w-full'>
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' className='mt-0
                    block
                    w-full
                    px-0.5
                    bg-transparent
                    border-0 border-b border-gray-300
                    focus:ring-0 focus:border-black' name='password' />
      </div>
      <div className='w-1/2 bg-red-900 transform skew-x-37'>
        <button type='submit' className='w-full text-center p-2 transform -skew-x-37'>Submit</button>
      </div>
    </form>
  )
}

export default Login