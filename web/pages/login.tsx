import type { NextPage } from 'next'

const Login: NextPage = () => {
  return (
    <form className='container m-auto px-4'>
      <div className='block'>
        <label htmlFor='username'>Username</label>
        <input type='text' id='username' className='
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black'
          name='username' />
      </div>
      <div className='block'>
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' className='mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black' name='password' />
      </div>
      <button type='submit' className='block'>Submit</button>
    </form>
  )
}

export default Login