import ArticleService from "service/articleService";

export const types = {
    FETCH_ARTICLES:"FETCH_ARTICLES"
}

export const fetchArticles = () => dispatch => {
    ArticleService.getLatestArticles().then(articles)
    {
        dispatch(
            {type: types.FETCH_ARTICLES, data: articles}
        );
    }
}
