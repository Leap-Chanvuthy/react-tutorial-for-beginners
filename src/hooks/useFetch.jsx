import {useState , useEffect} from "react";

const useFetch = (url) => {
    const [articles , setArticles] = useState([]);
    const [loading , setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const respone = await fetch (url);
                const data = await respone.json();
                setArticles(data);
                setLoading(false);
            }
            catch (error){
                console.log(error);
                setLoading(false);
            }
        }
        fetchData();
    }, [url])

    return {articles , loading};
}
    
export default useFetch;

