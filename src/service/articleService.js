import ApiHelper from "helpers/api"

export default new (class ArticleService {
    getLatestArticles(){
        return ApiHelper.get("/article/getForOverview?limit=5");
    }
})();
