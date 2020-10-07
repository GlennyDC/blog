import { Layout, Date } from '@/components';
import { getSortedPostsData } from '@/lib';
import Link from 'next/link';

export const getStaticProps = () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

const Home = ({ allPostsData }: any) => {
  return (
    <Layout>
      <div style={{ height: '100vh', padding: '5rem 0' }}>
        {allPostsData.map(({ id, date, title }: any) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            {id}
            <br />
            <Date dateString={date} />
          </li>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
