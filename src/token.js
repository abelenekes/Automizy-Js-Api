define([
    'automizyApi/core',
    'automizyApi/functions/urlManager',
    'automizyApi/functions/cookie',
    'automizyApi/functions/date'
], function () {
    var Token = function () {
        var t = this;
        t.d = {
            access_token: $AA.cookie.get('AutomizyApiAccessToken') || false,
            refresh_token: $AA.cookie.get('AutomizyApiRefreshToken') || false,
            client_id: $AA.cookie.get('AutomizyApiClientId') || false,
            username: $AA.cookie.get('AutomizyApiUsername') || false,
            expires: parseInt($AA.cookie.get('AutomizyApiExpires')) || 0,
            scope: $AA.cookie.get('AutomizyApiScope') || null,
            token_type: $AA.cookie.get('AutomizyApiTokenType') || "Bearer",
            error:function(){},
            success:function(){},
            loginError:function(){},
            loginAjaxError:function(){},
            loginAjaxSuccess:function(){},
            refreshAjaxError:function(){},
            refreshAjaxSuccess:function(){},
            refreshLoopTimeout:false
        };
    };

    var p = Token.prototype;

    p.refreshLoop = function(){
        var t = this;
        if ($AA.date.timestamp() > parseInt($AA.cookie.get('AutomizyApiExpires')) - 120) {
            t.refresh();
        }
        clearTimeout(t.d.refreshLoopTimeout);
        t.d.refreshLoopTimeout = setTimeout(function(){
            t.refreshLoop();
        }, 30000);
    };
    p.refreshLoopStop = function(){
        var t = this;
        clearTimeout(t.d.refreshLoopTimeout);
    };
    p.refreshLoopStart = function(){
        var t = this;
        t.refreshLoop();
    };
    p.refreshLoopRestart = function(){
        var t = this;
        t.refreshLoopStop();
        t.refreshLoopStart();
    };

    p.loggedIn = function(loggedIn){
        var t = this;
        if (typeof loggedIn !== 'undefined') {
            t.d.loggedIn = $AA.parseBoolean(loggedIn);
            return t;
        }
        return t.d.loggedIn;
    };

    p.get = function () {
        var t = this;
        if($AA.cookie.get('AutomizyApiAccessToken') !== false){
            t.loggedIn(true);
            t.refreshLoopRestart();
        }else{
            t.refreshLoopStop();
            t.loggedIn(false);
        }
        return $AA.cookie.get('AutomizyApiAccessToken');
    };

    p.set = function (token) {
        var t = this;

        if(typeof token.access_token !== 'undefined'){
            t.d.access_token = token.access_token;
            $AA.cookie.set('AutomizyApiAccessToken', token.access_token, t.cookieAttributes())
        }
        if(typeof token.expires_in !== 'undefined'){
            t.d.expires = $AA.date.timestamp() + parseInt(token.expires_in) - 10;
            $AA.cookie.set('AutomizyApiExpires', t.d.expires, t.cookieAttributes())
        }
        if(typeof token.refresh_token !== 'undefined'){
            t.d.refresh_token = token.refresh_token;
            $AA.cookie.set('AutomizyApiRefreshToken', token.refresh_token, t.cookieAttributes())
        }
        if(typeof token.scope !== 'undefined'){
            t.d.scope = token.scope;
            if(t.d.scope !== false)$AA.cookie.set('AutomizyApiScope', token.scope, t.cookieAttributes());
        }
        if(typeof token.token_type !== 'undefined'){
            t.d.token_type = token.token_type;
            $AA.cookie.set('AutomizyApiTokenType', token.token_type, t.cookieAttributes())
        }
        if(typeof token.client_id !== 'undefined'){
            t.d.client_id = token.client_id;
            $AA.cookie.set('AutomizyApiClientId', token.client_id, t.cookieAttributes())
        }
        if(typeof token.username !== 'undefined'){
            t.d.username = token.username;
            $AA.cookie.set('AutomizyApiUsername', token.username, t.cookieAttributes())
        }

        return true;
    };

    p.refresh = function () {
        var t = this;
        return $.ajax({
            type: "POST",
            url: $AA.refreshUrl(),
            data: {
                refresh_token: $AA.cookie.get('AutomizyApiRefreshToken'),
                username: $AA.cookie.get('AutomizyApiUsername')
            },
            success: function (data, textStatus, jqXHR) {
                t.set(data);
                t.loggedIn(true);
                t.refreshAjaxSuccess.apply(t, [data, textStatus, jqXHR]);
            },
            error: function(jqXHR, textStatus, errorThrown){
                t.refreshAjaxError.apply(t, [jqXHR, textStatus, errorThrown]);
            }
        });
    };

    p.error = function(error){
        var t = this;
        if (typeof error === 'function') {
            t.d.error = error;
            return t;
        }
        return t.d.error;
    };
    p.success = function(success){
        var t = this;
        if (typeof success === 'function') {
            t.d.success = success;
            return t;
        }
        return t.d.success;
    };
    p.loginError = function(loginError){
        var t = this;
        if (typeof loginError === 'function') {
            t.d.loginError = loginError;
            return t;
        }
        return t.d.loginError;
    };
    p.loginAjaxError = function(loginAjaxError){
        var t = this;
        if (typeof loginAjaxError === 'function') {
            t.d.loginAjaxError = loginAjaxError;
            return t;
        }
        return t.d.loginAjaxError;
    };
    p.loginAjaxSuccess = function(loginAjaxSuccess){
        var t = this;
        if (typeof loginAjaxSuccess === 'function') {
            t.d.loginAjaxSuccess = loginAjaxSuccess;
            return t;
        }
        return t.d.loginAjaxSuccess;
    };
    p.refreshAjaxError = function(refreshAjaxError){
        var t = this;
        if (typeof refreshAjaxError === 'function') {
            t.d.refreshAjaxError = refreshAjaxError;
            return t;
        }
        return t.d.refreshAjaxError;
    };
    p.refreshAjaxSuccess = function(refreshAjaxSuccess){
        var t = this;
        if (typeof refreshAjaxSuccess === 'function') {
            t.d.refreshAjaxSuccess = refreshAjaxSuccess;
            return t;
        }
        return t.d.refreshAjaxSuccess;
    };

    p.passwordLogin = function (obj) {
        var t = this;
        var obj = obj || {};
        obj.username = obj.username || false;
        obj.password = obj.password || false;
        obj.hash = obj.hash || false;

        if (obj.username === false || obj.password === false) {
            t.loginError.apply(t, ['The username and password must be provide!']);
            return false;
        }

        $AA.cookie.set('AutomizyApiUsername', obj.username, t.cookieAttributes());
        $AA.cookie.set('automizyLoginPageUrl', $AA.loginPageUrl(), t.cookieAttributes());

        var data = {
            username: obj.username,
            password: obj.password
        };
        if(obj.hash !== false){
            data.hash = obj.hash;
        }

        return $.ajax({
            type: "POST",
            url: $AA.loginUrl(),
            data: data,
            success: function (data, textStatus, jqXHR) {
                t.set(data);
                t.loggedIn(true);
                t.refreshLoopRestart();
                t.d.loginAjaxSuccess.apply(t, [data, textStatus, jqXHR]);
            },
            error: function(jqXHR, textStatus, errorThrown){
                t.d.loginAjaxError.apply(t, [jqXHR, textStatus, errorThrown]);
            }
        });
    };

    p.credentialsLogin = function (obj) {
        var t = this;
        var obj = obj || {};
        obj.clientId = obj.clientId || false;
        obj.clientSecret = obj.clientSecret || false;
        obj.hash = obj.hash || false;

        if (obj.clientId === false || obj.clientSecret === false) {
            t.loginError.apply(t, ['The clientId and clientSecret must be provide!']);
            return false;
        }

        var data = {
            grant_type: "client_credentials",
            client_id: obj.clientId,
            client_secret: obj.clientSecret
        };
        if(obj.hash !== false){
            data.hash = obj.hash;
        }

        return $.ajax({
            type: "POST",
            url: $AA.oauthUrl(),
            data: data,
            success: function (data, textStatus, jqXHR) {
                t.set(data);
                t.loggedIn(true);
                t.refreshLoopRestart();
                t.d.loginAjaxSuccess.apply(t, [data, textStatus, jqXHR]);
            },
            error: function(jqXHR, textStatus, errorThrown){
                t.d.loginAjaxError.apply(t, [jqXHR, textStatus, errorThrown]);
            }
        });
    };

    p.login = function (obj) {
        var t = this;
        var obj = obj || {};
        if (typeof obj.username !== 'undefined' && typeof obj.password !== 'undefined') {
            return t.passwordLogin(obj);
        }else if (typeof obj.clientId !== 'undefined' && typeof obj.clientSecret !== 'undefined') {
            return t.credentialsLogin(obj);
        } else {
            t.loginError.apply(t, ['Missing parameters!']);
            return false;
        }
    };

    p.cookieAttributes = function(){
        var obj = {};
        if(location.host.indexOf('.protopmail.com') >= 0){
            obj.domain = '.protopmail.com';
        }else if(location.host.indexOf('.automizy.com') >= 0){
            obj.domain = '.automizy.com';
        }else{
            obj.domain = location.hostname;
        }
        return obj;
    };

    p.logout = function(){
        var t = this;
        t.loggedIn(false);
        t.refreshLoopStop();
        t.d.access_token = false;
        t.d.refresh_token = false;
        t.d.username = false;
        t.d.client_id = false;
        t.d.expires = 0;
        $AA.cookie.remove('AutomizyApiAccessToken', t.cookieAttributes());
        $AA.cookie.remove('AutomizyApiRefreshToken', t.cookieAttributes());
        $AA.cookie.remove('AutomizyApiClientId', t.cookieAttributes());
        $AA.cookie.remove('AutomizyApiExpires', t.cookieAttributes());
        $AA.cookie.remove('AutomizyApiUsername', t.cookieAttributes());
    };

    $AA.m.Token = Token;
    $AA.d.token = new Token();
    $AA.token = function () {
        return $AA.d.token;
    }
});