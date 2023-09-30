const News = ({elements}) => {
  return (
    <>
      <div className="cards">
        <a href={elements.url} target="_blank" rel="noreferrer" >
          <img
            src={elements.urlToImage}
            alt={elements.description}
            width="100%"
          />
        </a>
        <p> {elements.source.name} </p>
      </div>
    </>
  )
};
export default News;