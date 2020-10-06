import { Layout, Date } from '@/components';
import { getAllPostIds, getPostData } from '@/lib';
import Head from 'next/head';

export const getStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const postData = await getPostData(params.id);
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
        {postData.id}
        <br />
        <Date dateString={postData.date} />
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </Layout>
    </>
  );
};

export default Post;
