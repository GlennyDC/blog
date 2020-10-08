import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import { readdir, readFile } from './utils';

const postsDirectory = path.join(process.cwd(), './src/content/posts');

export const getSortedPostsData = async () => {
  const postFileNames = await readdir(postsDirectory);

  const allPostsData = await Promise.all(
    postFileNames.map(async (postFileName) => {
      const postFilePath = path.join(postsDirectory, postFileName);
      const postFileContent = await readFile(postFilePath, 'utf8');

      const matterResult = matter(postFileContent);

      return {
        ...matterResult.data,
      };
    }),
  );

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    return -1;
  });
};

export const getAllPostPaths = async () => {
  const postFileNames = await readdir(postsDirectory);

  const postPaths = await Promise.all(
    postFileNames.map(async (postFileName) => {
      const postFilePath = path.join(postsDirectory, postFileName);
      const postFileContent = await readFile(postFilePath, 'utf8');

      const matterResult = matter(postFileContent);

      return {
        params: {
          slug: matterResult.data.slug,
        },
      };
    }),
  );

  return postPaths;
};

export const getPostData = async (slug: string) => {
  const postFileNames = await readdir(postsDirectory);

  const postsFileSlugMapping = await Promise.all(
    postFileNames.map(async (postFileName) => {
      const postFilePath = path.join(postsDirectory, postFileName);
      const postFileContent = await readFile(postFilePath, 'utf8');

      const matterResult = matter(postFileContent);

      return {
        postFilePath,
        slug: matterResult.data.slug,
      };
    }),
  );

  // @ts-ignore
  const { postFilePath } = postsFileSlugMapping.find(
    (postFileSlugMapping) => postFileSlugMapping.slug === slug,
  );

  const postFileContent = await readFile(postFilePath, 'utf8');

  const matterResult = matter(postFileContent);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    slug,
    contentHtml,
    ...matterResult.data,
  };
};
