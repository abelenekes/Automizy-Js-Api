define([

], function () {
    $AA = new function () {
        var t = this;
        t.xhr = {};
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

        var baseUrl = window.automizyApiBaseUrl || "https://api.automizy.com";
        var apiLoginPhp = window.automizyApiLoginPhp || "https://app.automizy.com/php/login.php";
        var apiRefreshPhp = window.automizyApiRefreshPhp || "https://app.automizy.com/php/refresh.php";
        t.u = {
            base:baseUrl,
            loginPhp: apiLoginPhp,
            refreshPhp: apiRefreshPhp,
            oauth: baseUrl + '/oauth',
            segments: baseUrl + '/segments',
            campaigns: baseUrl + '/campaigns',
            splitTests: baseUrl + '/split-tests',
            newsletters: baseUrl + '/newsletters',
            automationEmails: baseUrl + '/automations/emails',
            contacts: baseUrl + '/contacts',
            contactTags: baseUrl + '/contacts/tags',
            customFields: baseUrl + '/custom-fields',
            users: baseUrl + '/users',
            jobs: baseUrl + '/jobs',
            webhooks: baseUrl + '/webhooks',
            images: baseUrl + '/images',
            templates: baseUrl + '/templates',
            forms: baseUrl + '/forms',
            automations: baseUrl + '/automations',
            account: baseUrl + '/account',
            accountStatistics: baseUrl + '/account/statistics',
            contactImports: baseUrl + '/contact-imports',
            tags: baseUrl + '/tags',
            clients: baseUrl + '/clients',
            updates: baseUrl + '/updates',
            plugins: baseUrl + '/plugins',
            milestones: baseUrl + '/milestones',
            leadScores: baseUrl + '/lead-scores',
            unbounceForms: baseUrl + '/external/unbounce/forms',
            autoDetectedForms: baseUrl + '/external/unbounce/forms',

            emailPreview: baseUrl + '/email-preview'
        };

        t.m = [];
    }();
});