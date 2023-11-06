import { useEffect, useState } from "react";

import styles from "./LandingStyles.module.scss";


interface IArticle {
  author: string;
  blog: string;
  content: string;
  etag: string;
  id: string;
  kind: string;
  published: string;
  replies: string;
  selfLink: string;
  title: string;
  updated: string;
  url: string;
  images: [];
}

interface ILanding {
  articles: IArticle[];
}

export const Landing = ({ articles }: ILanding) => {

  console.log(articles)

  const [currentArticle, setcurrentArticle] = useState<IArticle>();
  const [articleList, setArticleList] = useState<IArticle[]>([]);

  const handleChangeArticle = (id: string) => {

    setcurrentArticle(articles.find(article => article.id === id));

    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Esta opção faz a animação de rolagem suave
    });

  }

  useEffect(() => console.log(currentArticle))

  useEffect(() => {
    articles && setArticleList(articles)
  }, [articles]);

  return (
    <>
      {
        (articleList.length > 0)
          ? <div className={styles.container}>
            <div className={styles.mainArticle}>

              <img src={currentArticle !== undefined ? currentArticle.images && currentArticle.images[0].url : articleList[0].images && articleList[0].images[0].url} />


              <span className={styles.title}>{currentArticle ? currentArticle.title : articleList[0].title}</span>


              {
                currentArticle
                  ? <div dangerouslySetInnerHTML={{ __html: currentArticle.content }} />
                  : <div onClick={() => handleChangeArticle(articleList[0].id)} style={{ display: "flex", alignItems: "center" }}> <div dangerouslySetInnerHTML={{ __html: articleList[0].content.substring(0, 40) }} /> <span>...</span> </div>
              }
            </div>

            <div className={styles.separator} />

            <span className={styles.allArticlesTitle}>Outros Artigos</span>
            <div className={styles.columnWrapper}>
              {currentArticle === undefined ? (
                // Se currentArticle for null, exiba todos os artigos
                articleList.map(article => (
                  <div className={styles.article} key={article.id}>
                    {article.images && <img src={article.images[0].url} alt={article.title} />}
                    <span className={styles.articleTitle} onClick={() => handleChangeArticle(article.id)}>{article.title}</span>
                  </div>
                ))
              ) : (
                // Se currentArticle não for null, exiba apenas dois artigos de forma aleatória
                Array.from({ length: 2 }).map(() => {
                  const randomIndex = Math.floor(Math.random() * articleList.length);
                  const article = articleList[randomIndex];

                  return (
                    <div className={styles.article} key={article.id}>
                      {article.images && <img src={article.images[0].url} alt={article.title} />}
                      <span className={styles.articleTitle} onClick={() => handleChangeArticle(article.id)}>{article.title}</span>
                    </div>
                  );
                })
              )}
            </div>
          </div>
          : "CARREGANDO..."}
    </>
  )

}