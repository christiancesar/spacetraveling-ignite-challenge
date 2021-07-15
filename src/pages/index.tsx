import { GetStaticProps } from 'next';

import Head from 'next/head';

import Prismic from '@prismicio/client';
import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Spacetraveling</title>
      </Head>
      <h1>Hellow</h1>;
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const response = await prismic.query(
    Prismic.Predicates.at('document.type', 'post'),
    {
      fetch: ['post.title', 'post.content'],
      pageSize: 100,
    }
  );
  console.log(response);

  return {
    props: {},
  };
};
