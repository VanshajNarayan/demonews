import { useEffect, useState } from "react";
import News from "./News";
import "./Api.css"

const Api = () => {

  const [apiData, setApiData] = useState([]);

  const Apicalling = async () => {
    const responce = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=50ee585bf1364c1db2d0b89b0b504a7b`);
    const {articles} = await responce.json();
    setApiData(articles);
  }

  useEffect(() => {
    Apicalling();
  }, [])

  return (
    <>
      <h2>Daily News</h2>
      <div className="allNews">
        {
          apiData.map((elements, index) => <News key={index} elementss = {elements} /> )
        }
      </div>
    </>
  )
};
export default Api;