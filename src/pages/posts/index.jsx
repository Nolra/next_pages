import { getPosts } from "@/api/posts";
import Head from "next/head";
import Link from "next/link";

// Нужно ответить на вопрос меняются ли данные 
// в данном случае (posts, как массив данных)

// если данные меняются со времененим то SSR
// const getServerSideProps = async() => {
//   const posts = await getPosts();
//   return { props: { posts } }
// }

// если данные неизменны, тогда SSG
const getStaticProps = async() => {
  const posts = await getPosts();
  return { props: { posts } }
}


const PostsPage = ({ posts }) => {
  return (
      <>
        <Head>
          <title>All Posts</title>
        </Head>
        <main>
          <h1>Posts Page</h1>
          <ul>
            {
              posts.map(post => (
                <li key={post.id}>
                  <Link href={`/posts/${post.id}`}>
                    {post.title}
                  </Link>
                  {/* 
                    <Link href={{
                      pathname: `/posts/${post.id}`,
                      query: {
                        limit: post.limit
                      }
                    }}>
                      {post.title}
                    </Link> 
                  */}

                </li>
              ))
            }
          </ul>
        </main>
      </>
  )
}

export { getStaticProps };
export default PostsPage;
