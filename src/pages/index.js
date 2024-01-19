import Head from "next/head";

// два варианта для загрузки страницы SSR || SSG
// Серверный пререндер страницы или же статичная генерация страниц

// Если это SSG - статика, то тоже два варианта

// 1. Контент страницы не зависит от данных
// 1.2 Адрес страницы не динамичен, статичен (не [someId])
// Тогда никаких функций next мы не используем
// То есть страница выглядит как обычный просто реакт компонент
// И является просто способом роутинга (src/about-us.jsx --> www.some.com/about-us страница)

// 2. Контент страницы зависит от данных (статика)
// Как зависит? Если статика (данные не меняются), 
// но нужен запрос к базе данных чтобы взять контент, тогда SSG
// SSG здесь это использование функции getStaticProps, которая должна вернуть объект props
// для страницы вида { props: { myData: data } } ---> ({ myData })

// 2.1. Контент страницы зависит от данных (статика) и страница динамична в своем роуте ([someId].jsx)
// Нужно сформировать массив путей, для этого используется функция getStaticPath,
// которая должна вернуть массив путей следующего вида [{ params: { paths } }]
// Затем вы должны использовать функцию getStaticProps, у которой вам пригодится аргумент context,
// у которого есть дочерний объект params, который хранит обычно id этой страницы
// таким образом вы получаете и пути для next и пропсы для страницы 

// 3. Динамика - getServerSideProps
// используется когда данные изменяются, все тоже самое, что и при getStaticProps, и 
// getStaticPath не нужен





const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <main>
        <h1>Hello, HomePage</h1>
      </main>
    </>
  )
}

export default HomePage;




// DEPLOY на git pages
// ЛОКАЛЬНО
// 1. Создаем create-next-app my-next-app
// 2. Заходим в package.json и добавляем в scripts строчку "export": "next build"
// 3. Там же в package.json добавляем "homepage": "ссылка на наш репо gitpages"
// 4. Меняем next.config.js на next.config.mjs и редактируем его на 

// /** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === 'production';
// const nextConfig = {
//   output: 'export', // ДОБАВЛЕНО
//   images: {
//     loader: 'akamai',
//     path: '',
//   },
//   assetPrefix: isProd ? 'https://myRepoGitPage.io' : undefined,
// }
// export default nextConfig;

// GITHUB
// 5. Создаем папку .github, внутри нее создаем папку workflows
// и внутри workflows создаем файл, который называем node.js.yml
// и копируем содержимое этого файла туда https://github.com/DaveAldon/Next.js-and-GitHub-Pages-Example/blob/main/.github/workflows/node.js.yml

// 6. Нужно обновить личный токен на github (user --> settings --> developer settings ---> tokens ---> checkbox workflow)
// THIS!!! 7. Изменить настройки репозитория здесь внизу https://github.com/Nolra/next_pages/settings/actions
// Workflow Permissions: Rean and Write и Allow GitHub Actions to approve pull requests