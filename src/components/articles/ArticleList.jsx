const ArticleList = (props) => {
    return ( 
        <div className="article-list">
            {props.articles.map((a) => (
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