const ArticleList = ({articles , loading}) => {
    return ( 
        <div className="article-list">
            {loading && <h4>Loading ....</h4>}
            {articles.map((a) => (
                <div className="article" key={a.id}>
                    <h2 className="article-title">{a.title}</h2>
                    <div className="article-body">{a.body}</div>
                    <p className="article-author">Author : {a.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default ArticleList;