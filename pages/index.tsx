import Link from 'next/link'
import type { GetStaticProps } from 'next'
import { getAllPostIds } from '@/lib/posts'

export default function Home({ postPaths }: { postPaths: { id: string }[] }) {
  return (
    <div className="flex flex-col w-screen h-screen text-center">
      <Link href="/home">
        <a className="mt-10 text-blue-400 mb-44 hover:underline">
          Go to default next.js page
        </a>
      </Link>

      <h1
        className="inline mb-2 filter drop-shadow-xl text-9xl"
        style={{ fontFamily: 'Abril Fatface' }}
      >
        Home Page
      </h1>
      <p className="mb-24 text-4xl">This is the my next app</p>

      <div className="mb-5 font-bold text-blue-900">
        <h4 className="text-4xl">Choose from posts below</h4>
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
