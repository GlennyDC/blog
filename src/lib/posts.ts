import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import remarkHtml from 'remark-html';

import { readdir, readFile } from './utils';

const postsDirectory = path.join(process.cwd(), './src/content/posts');

const readAndParseFile = async (filePath: string) => {
  const fileContent = await readFile(filePath, 'utf8');
  const parsedFile = matter(fileContent);
  return parsedFile;
};

export const getAllPostPaths = async () => {
  const allPostFileNames = await readdir(postsDirectory);

  const allPostPaths = await Promise.all(
    allPostFileNames.map(async (postFileName) => {
      const postFilePath = path.join(postsDirectory, postFileName);
      const postFileContents = await readAndParseFile(postFilePath);

      return {
        params: {
          slug: postFileContents.data.slug,
        },
      };
    }),
  );

  return allPostPaths;
};

export const getAllPostData = async () => {
  const allPostFileNames = await readdir(postsDirectory);

  const allPostData = await Promise.all(
    allPostFileNames.map(async (postFileName) => {
      const postFilePath = path.join(postsDirectory, postFileName);
      const postFileContents = await readAndParseFile(postFilePath);

      return {
        ...postFileContents.data,
      };
    }),
  );

  return allPostData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    return -1;
  });
};

export const getPostData = async (slug: string) => {
  const allPostFileNames = await readdir(postsDirectory);

  const postFileSlugMappings = await Promise.all(
    allPostFileNames.map(async (postFileName) => {
      const postFilePath = path.join(postsDirectory, postFileName);
      const postFileContents = await readAndParseFile(postFilePath);

      return {
        postFilePath,
        slug: postFileContents.data.slug,
      };
    }),
  );

  const { postFilePath } = postFileSlugMappings.find(
    (postFileSlugMapping) => postFileSlugMapping.slug === slug,
  )!;

  const postFileContents = await readAndParseFile(postFilePath);

  const processedContent = await remark()
    .use(remarkHtml)
    .process(postFileContents.content);

  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...postFileContents.data,
  };
};
