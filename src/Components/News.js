const News = ({elementss}) => {
  return (
    <>
      <div className="cards">
        <a href={elementss.url} target="_blank" rel="noreferrer" >
          <img
            src={elementss.urlToImage}
            alt={elementss.description}
            width="100%"
          />
        </a>
        <p> {elementss.source.name} </p>
      </div>
    </>
  )
};
export default News;