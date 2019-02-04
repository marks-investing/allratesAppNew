import config from "config/api";

export default new (class Api {
    get(endpoint) {
        var url =config.url+endpoint;
        var token = config.token;
        return fetch(url,{
            headers:new Headers({
                "API-token":token
            })
        }).then(function(response){return response.json()});
    }
})();
