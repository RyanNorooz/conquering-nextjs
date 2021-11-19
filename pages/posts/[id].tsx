import Head from 'next/head'
import type { GetStaticProps, GetStaticPaths } from 'next'
import { getAllPostIds, getPostData } from '@/lib/posts'
import Date from '@/components/date'

export default function Posts({
  postData,
}: {
  postData: {
    id: string
    title: string
    date: string
    contentHtml: string
  }
}) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className="w-screen pt-12 m-auto prose max-w-[70ch]">
        <h1 className="text-center uppercase !font-light">
          ⚜ The Ultimate Aphrodisiac ⚜
        </h1>

        <section>
          <p className="inline px-2 py-1 font-mono bg-blue-600/50">
            Filename: {postData.id}
          </p>
          <h3>{postData.title}</h3>
          <Date dateString={postData.date} />

          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </section>
      </div>{' '}
    </>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string)
  return {
    props: {
      postData,
    },
  }
}
