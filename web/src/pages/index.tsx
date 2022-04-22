import {getSession, useUser} from '@auth0/nextjs-auth0'
import { GetServerSideProps } from 'next'

export default function Home() {
  const {user} = useUser()

  // return (
  //   <div>
  //     <h1>Hello World!</h1>
  //     <pre>
  //       {JSON.stringify(user, null, 2)}
  //     </pre>
  //     <a href="/api/auth/login">Login</a>
  //   </div>
  // )
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({req, res}) => {
  // const token = getAccessToken(ctx.req, ctx.res)
  const session = getSession ( req, res)

 if(!session) {
   return {
     redirect: {
       destination: '/api/auth/login',
       permanent: false,
     }
   }
 } else {
   return {
     redirect: {
       destination: '/app',
       permanent: false,
     }
   }
 }
}