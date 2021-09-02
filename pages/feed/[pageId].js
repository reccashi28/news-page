import styles from '../../styles/Feed.module.css'

const Feed = ( {pageNumber, articles }) => {

    console.log(pageNumber, articles)
    return (
        <div className={styles.main}>
            {articles.map( (article, index) => {
                return <div key={index} className={styles.post}>
                           <h1>{article.title}</h1>
                            <p>{article.description}</p>
                            {!!article.urlToImage && <img src={article.urlToImage} />}
                        </div>
            })}
            
        </div>
    )
}

export const getServerSideProps = async pageContext => {
    const pageNumber = pageContext.query.pageId;

    if( !pageNumber || pageNumber < 1 || pageNumber > 5) {
        return {
            props: {
                articles: [],
                pageNumber: 1,
            }
        }
    }

    const apiResponse = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}`,
        {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`
            }
        }
    );
    
    const responseJson = await apiResponse.json();

    console.log(responseJson);

    const { articles } = responseJson;


    return {
        props: {
            articles,
            pageNumber: Number.parseInt(pageNumber)
        }
    };

}

export default Feed; 