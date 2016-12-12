define([
    "automizyApi/core"
], function () {

    $AA.baseUrl = function(url){
        if(typeof url !== 'undefined') {
            $AA.url.base = url;
            return $AA;
        }
        return $AA.url.base;
    };

    $AA.createUrl = function(name){
        if(typeof $AA.url[name] === 'undefined'){
            $AA.url[name] = {
                urlOrApiName:'',
                useBaseUrl:false
            };
        }
        $AA[name + 'Url'] = function(urlOrApiName, useBaseUrl){
            if(typeof urlOrApiName !== 'undefined') {
                $AA.url[name].urlOrApiName = urlOrApiName;
                $AA.url[name].useBaseUrl = useBaseUrl || false;
                return $AA;
            }
            return $AA.url[name].useBaseUrl ? ($AA.baseUrl() + '/' + $AA.url[name].urlOrApiName) : $AA.url[name].urlOrApiName;
        };
        return $AA[name + 'Url'];
    };

    $AA.baseUrl(window.automizyApiBaseUrl || window.AutomizyBaseApiUrl || "https://api.automizy.com");

    $AA.createUrl('login')(window.automizyApiLoginPhp || window.AutomizyLoginApiUrl || "https://login.automizy.com/api/login.php");
    $AA.createUrl('refresh')(window.automizyApiRefreshPhp || window.AutomizyRefreshApiUrl || "https://login.automizy.com/api/refresh.php");
    $AA.createUrl('oauth')("oauth", true);
    $AA.createUrl('images')("images", true);
    $AA.createUrl('emaileditorImages')("images?directory=emaileditor", true);
    $AA.createUrl('emailPreview')("email-preview", true);

    $AA.createUrl('loginPage')(window.AutomizyLoginPageUrl || "https://login.automizy.com");

});