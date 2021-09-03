import styles from '../../styles/Feed.module.css';
import { useRouter } from 'next/router';
import Toolbar from '../../components/toolbar'

const Feed = ( {pageNumber, articles }) => {

    const  router = useRouter();

    return (
        <div className='page-container'>
            <Toolbar />            
            <div className={styles.main}>
            {articles.map( (article, index) => {
                return (
                    <div key={index} className={styles.post}>
                           <h1 onClick={ () => window.location.href = article.url}>{article.title}</h1>
                            <p>{article.description}</p>
                            {!!article.urlToImage && <img src={article.urlToImage} />}
                    </div>
                )
            })}
            
            </div>
            
            <div className={styles.paginator}>
                <div 
                className={pageNumber === 1 ? styles.disabled : styles.active}
                onClick={() => {
                    if(pageNumber > 1 ){
                        router.push(`/feed/${pageNumber -1 }`)
                    }
                }}
                > Previous page</div>
                <div>{pageNumber}</div>
                <div 
                className={pageNumber === 5 ? styles.disabled : styles.active}
                onClick={() => {
                    if(pageNumber < 5 ){
                        router.push(`/feed/${pageNumber + 1 }`)
                    }
                }}
                > Next page</div>
            </div>
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
    const { articles } = responseJson;

    return {
        props: {
            articles,
            pageNumber: Number.parseInt(pageNumber)
        }
    };

}

export default Feed; 