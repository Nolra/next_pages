import { getPosts } from "@/api/posts";
import Head from "next/head";
import Link from "next/link";
import someImg from "../../../public/vercel.svg"
import Image from "next/image";

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

        <Image src={someImg} alt="vercel"/>
        {/* 
        
          <img 
            loading="lazy" 
            width="283"
            height="64"
            decoding="async"
            data-nimg="1"
            src="/next_pages/_next/static/media/vercel.3c8eefce.svg" 
            style="color: transparent;"
          >
        
        */}

        <Image 
          width={335}
          height={335}
          src={"https://avatars.githubusercontent.com/u/22813898?v=4"} 
        />
      </>
  )
}

export { getStaticProps };
export default PostsPage;
