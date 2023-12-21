import ArticleList from "../components/articles/ArticleList";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const {articles , loading} = useFetch("http://localhost:4000/article")
    
    return (
        <div>
            <ArticleList articles={articles} loading={loading} />
        </div>
    )
}

export default Home ;