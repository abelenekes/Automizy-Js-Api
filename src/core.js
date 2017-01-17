define([

], function () {
    $AA = new function () {
        var t = this;
        t.xhr = {};
        t.url = {};
        t.d = {
            version: '0.1.0',
            login:false,
            hasOpenLoginForm:true,
            lastAjaxData:{},
            data:{},
            ad:{
                error:function (jqXHR, textStatus, errorThrown) {
                    if(arguments.length === 3) {
                        if ($.inArray(jqXHR.status, [404, 405]) >= 0) {
                            alert(jqXHR.status + ' (' + errorThrown + ')');
                        } else if ($.inArray(jqXHR.status, [403]) >= 0) {
                            $AA.d.lastAjaxData = this;
                            $AA.openLoginDialog();
                        } else if ($.inArray(jqXHR.status, [400, 401]) >= 0) {
                            alert(jqXHR.status + ' (' + errorThrown + ')');
                            $AA.openLoginDialog();
                        } else {
                            console.error(jqXHR.status, textStatus, errorThrown);
                        }
                    }else{
                        console.log('<----------- Automizy Api Error');
                        console.log(jqXHR);
                        console.log(textStatus);
                        console.log(errorThrown);
                        console.log('Automizy Api Error ----------->');
                        $AA.openLoginDialog();
                    }
                }
            }
        };


        var baseApiUrl = window.automizyApiBaseUrl || window.AutomizyBaseApiUrl || "https://api.automizy.com";
        var loginApiUrl = window.automizyApiLoginPhp || window.AutomizyLoginApiUrl || "https://login.automizy.com/api/login.php";
        var refreshApiUrl = window.automizyApiRefreshPhp || window.AutomizyRefreshApiUrl || "https://login.automizy.com/api/refresh.php";

        t.m = [];
    }();
});