import { Layout, Date } from '@/components';
import { getAllPostPaths, getPostData } from '@/lib';
import Head from 'next/head';
import { GetStaticPaths } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostPaths();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const postData = await getPostData(params.slug);
  return {
    props: {
      postData,
    },
  };
};

const Post = ({ postData }: any) => {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Layout>
        {postData.title}
        <br />
        {postData.slug}
        <br />
        <Date dateString={postData.date} />
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </Layout>
    </>
  );
};

export default Post;
