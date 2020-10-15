import { Layout, Date } from '@/components';
import { getAllPostData } from '@/lib';
import Link from 'next/link';

export const getStaticProps = async () => {
  const allPostsData = await getAllPostData();
  return {
    props: {
      allPostsData,
    },
  };
};

const Home = ({ allPostsData }: any) => {
  return (
    <Layout>
      <div style={{ height: '100vh' }}>
        {allPostsData.map(({ slug, date, title }: any) => (
          <li key={slug}>
            <Link href={`/posts/${slug}`} prefetch={false}>
              <a>{title}</a>
            </Link>
            <br />
            {slug}
            <br />
            <Date dateString={date} />
          </li>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
