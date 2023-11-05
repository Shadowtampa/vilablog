
const App = () => {

  let articles = [{
    id: "1",
    img: "img",
    title: "someTitle"
  }]

  return (
    <>
      <header>VILABLOG
        <a>Blog</a>
        <a>About</a>
        <a>Links</a>
        <a>Github</a>w
      </header>

      <div>
        <div className='mainArticle'>
          <img />
          <span>A few words about this blog platform, Ghost, and how this site was made</span>

          <span>Why Ghost (& Figma) instead of Medium, WordPress or other options?</span>
        </div>

        <div className='Separator'>Separator asd</div>

        <div className='allArticles'>
          <span>allArticles</span>

          {articles && articles.map(article => (
            <div className='article' key={article.id}>
              <img src={article.img} alt={article.title} /> {/* Don't forget alt attribute for accessibility */}
              <span>{article.title}</span>
            </div>
          ))}


        </div>
      </div>
    </>
  )
}

export default App
