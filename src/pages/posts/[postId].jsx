import { getPosts, getPostData } from "@/api/posts";
import Head from "next/head";
import { useRouter } from "next/router";
import useSWR from "swr";

// import { promises as fs } from 'fs';

// const getServerSideProps = async(context) => {
//   console.log(context)
//   const post = await getPostData(context.params.postId);
//   return { props: { post } }
// }

// getServerSideProps
// в аргументах объект контекста
// где как раз достен id страницы который позволяет сделать запрос
// возвратное значение функции - такое же как в getStaticProps
// props, redirect, notFound




const getStaticProps = async({params}) => {
  // console.log("СМОТРИМ СЮДА", process.cwd() + "\some.txt")
  // fs.readFile(process.cwd() + "\some.txt", 'utf-8')
  const post = await getPostData(params.postId);
  return { 
    props: { post },
    // revalidate: 10, // частота пересборки страницы
    // notFound: !post, // 404 проверка на то что данные есть
    // redirect: { // можно использовать notFound или редиректить
    //   destination: "/",
    //   permanent: false
    // }
  }
}

// ИНКРЕМЕНТАЛЬНАЯ СТАТИЧЕСКАЯ РЕГЕНЕРАЦИЯ
// пересборка страницы без build (уже после него во время работы сайта)


const getStaticPaths = async() => {
  const posts = await getPosts();
  posts.length = 50;
  const paths = posts.map(post => ({
      params: { postId: post.id.toString() }
    })
  )
  return { 
    paths, // определяет пути для статичных страниц, которые мы будем генерировать во время build
    fallback: false // true | 'blocking' 
  }
}
// если нет статичной пререндеренной страницы и
// fallback: false - то 404
// fallback: true - то next делает запрос на создание этой страницы getStaticProps (notFound: !post тогда 404) загружается страница
// fallback: "blocking", тоже самое что и true, только нет фиктиной страницы загрузки (loading...)

const PostPage = ({ post }) => {
  // const router = useRouter(); // для fallback: true

  // const fetcher = (url) => fetch(url).then(res => res.json());
  // const { data, error } = useSWR('/api/user', fetcher);
  // // если нам не нужен пререндеринг (по seo соображениям), то можем использовать клиентский хук useSWR

  // if (error) {
  //   return <div>Error!</div>
  // }

  // if (!data) {
  //   return <div>Loading data...</div>
  // }


  // if (router.isFallback) {
  //   return <div>Loading page...</div>
  // }

  return (
      <>
        <Head>
          <title>Post {post.id}</title>
        </Head>
        <main>
          <h1>Post Page {post.id}</h1>
          <h2>{post.title}</h2>
          <h3>{post.body}</h3>
        </main>
      </>
  )
}

export { getStaticProps, getStaticPaths };
// export { getServerSideProps };
export default PostPage;
