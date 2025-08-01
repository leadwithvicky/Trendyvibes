// src/pages/blog/[slug].jsx
import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../../app/components/Header';
import BlogPost from '../../app/components/BlogPost';
import { getBlogBySlug } from '../../data/blogs';

export default function IndividualBlogPage() {
  const router = useRouter();
  const { slug } = router.query;

  const currentBlog = getBlogBySlug(slug);

  return (
    <>
      <Head>
        <title>{currentBlog.title} - Digital Marketing Agency</title>
        <meta name="description" content={currentBlog.description} />
        <meta name="keywords" content={currentBlog.keywords} />
        <meta property="og:title" content={currentBlog.title} />
        <meta property="og:description" content={currentBlog.description} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content="2025-01-15T00:00:00.000Z" />
        <meta property="article:author" content="Digital Marketing Agency" />
        <meta property="article:section" content="Digital Marketing" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={currentBlog.title} />
        <meta name="twitter:description" content={currentBlog.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <BlogPost blog={slug} />
    </>
  );
} 