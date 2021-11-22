import type { NextPage, GetServerSideProps } from 'next'

const Home: NextPage = () => {
  return null;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    redirect: {
      destination: '/login',
      permanent: false,
    }
  };
}

export default Home
