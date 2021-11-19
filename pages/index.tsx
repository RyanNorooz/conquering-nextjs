import Link from 'next/link'
import type { GetStaticProps } from 'next'
import { getAllPostIds } from '@/lib/posts'

export default function Home({ postPaths }: { postPaths: { id: string }[] }) {
  return (
    <div className="flex flex-col justify-center w-screen h-screen text-center">
      <h1 className="text-9xl mb-2" style={{ fontFamily: 'Abril Fatface' }}>
        Home Page
      </h1>
      <p className="mb-24 text-4xl">This is the my next app</p>

      <div className="text-blue-900 mb-10 font-bold">
        <h4 className="text-4xl">lets see some posts</h4>
        <p className="text-xl  font-semibold">choose from posts below</p>
      </div>

      {postPaths.map(({ id }) => (
        <Link key={id} href={`/posts/${id}`}>
          <a className="text-3xl text-blue-400 hover:underline">{id}</a>
        </Link>
      ))}
    </div>
  )
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      postPaths: getAllPostIds().map((obj) => ({ id: obj.params.id })),
    },
  }
}
