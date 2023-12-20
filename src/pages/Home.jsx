import ArticleList from "../components/articles/ArticleList";
import { useState  , useEffect} from "react";

const Home = () => {
    const article = [{
        id: 1,
        title: 'Introduction to React Hooks',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
        author: 'John Doe',
      },
      {
        id: 2,
        title: 'Building Responsive Web Design with CSS Grid',
        body: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ...',
        author: 'Jane Smith',
      },
      {
        id: 3,
        title: 'Getting Started with Express.js',
        body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...',
        author: 'Alice Johnson',
      },
      {
        id: 4,
        title: 'The Power of GraphQL in Modern Web Development',
        body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum...',
        author: 'Bob Anderson',
      },
      {
        id: 5,
        title: 'JavaScript ES6 Features You Should Know',
        body: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui...',
        author: 'Emily Davis',
      },
      {
        id: 6,
        title: 'Creating Beautiful UIs with Material-UI',
        body: 'Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in...',
        author: 'Alex Turner',
      } ];

    const [articles , setArticle] = useState([]);
    const [loading , setLoading] = useState(true);
    useEffect(() => {
        setArticle(article);
        setLoading(false);
    })


    return (
        <div>
            <ArticleList articles={articles} loading={loading} />
        </div>
    )
}

export default Home ;