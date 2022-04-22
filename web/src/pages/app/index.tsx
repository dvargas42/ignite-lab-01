import { getSession, useUser, withPageAuthRequired} from '@auth0/nextjs-auth0'
import { GetServerSideProps } from 'next';
import Link from 'next/link';

export default function Home() {
  const { user } = useUser()

  return (
    <div>
      <h1>Hello World!</h1>
      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>
      <Link href="/api/auth/logout">
      <a >Logout</a>
      </Link>
    </div>
  )
}

// export const getServerSideProps: GetServerSideProps = withPageAuthRequired()
export const getServerSideProps: GetServerSideProps = async ({ req, res}) => {
  const session = getSession(req, res);

  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/login',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}