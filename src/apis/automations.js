define([
    'automizyApi/core',
    'automizyApi/functions/initBasicFunctions',
    'automizyApi/token'
], function () {
    var Automations = function (obj) {
        var t = this;
        t.d = {
            a: 3,
            option: {},
            url: $AA.u.automations,
            xhr:{}
        };
        t.init();
        t.d.xhr.getNodesById = false;
        t.d.xhr.insertNode = false;
        t.d.xhr.deleteNode = false;
        t.d.xhr.updateNode = false;
        t.d.xhr.acceptDraft = false;
        t.d.xhr.discardDraft = false;


        if (typeof obj !== 'undefined') {
            t.initParameter(obj);
        }
    };


    var p = Automations.prototype;

    p.getNodesById = function(automationId){
        var t = this;
        t.d.xhr.getNodesById = $.ajax({
            url: $AA.u.automations + '/' + automationId + '/nodes',
            type: 'GET',
            dataType: 'json',
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
        return t.d.xhr.getNodesById;
    };
    p.insertNode = function(obj, automationId){
        var t = this;
        t.d.xhr.insertNode = $.ajax({
            url: $AA.u.automations + '/' + automationId + '/nodes',
            type: 'POST',
            dataType: 'json',
            data: obj,
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
        return t.d.xhr.insertNode;
    };
    p.deleteNode = function(automationId, nodeId, keepBranch){
        var t = this;
        var keep = false;
        var keepParameter = '';
        if(typeof keepBranch !== 'undefined'){
            keep = parseInt(keepBranch);
        }
        if(keep === 0 || keep === 1){
            keepParameter = '?keep='+keep
        }
        t.d.xhr.deleteNode = $.ajax({
            url: $AA.u.automations + '/' + automationId + '/nodes/' + nodeId + keepParameter,
            type: 'DELETE',
            dataType: 'json',
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
        return t.d.xhr.deleteNode;
    };
    p.updateNode = function(obj, automationId, nodeId){
        var t = this;
        t.d.xhr.updateNode = $.ajax({
            url: $AA.u.automations + '/' + automationId + '/nodes/' + nodeId,
            type: 'PATCH',
            dataType: 'json',
            data: obj,
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
        return t.d.xhr.updateNode;
    };
    p.acceptDraft = function(automationId){
        var t = this;
        t.d.xhr.acceptDraft = $.ajax({
            url: $AA.u.automations + '/' + automationId + '/accept-draft',
            type: 'POST',
            dataType: 'json',
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
        return t.d.xhr.acceptDraft;
    };
    p.discardDraft = function(automationId){
        var t = this;
        t.d.xhr.discardDraft = $.ajax({
            url: $AA.u.automations + '/' + automationId + '/discard-draft',
            type: 'POST',
            dataType: 'json',
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
        return t.d.xhr.discardDraft;
    };
    p.getCampaigns = function(){
        var t = this;
        return $.ajax({
            url: t.d.url + '/get-campaigns',
            type: 'GET',
            dataType: 'json',
            headers: {Authorization: 'Bearer ' + $AA.token().get()},
            error: $AA.token().error()
        });
    };



    moduleName = 'AutomationGetCampaigns';
    moduleNameLowerFirst = 'automationGetCampaigns';

    $AA.d.data[moduleNameLowerFirst] = {};

    $AA.xhr[moduleNameLowerFirst + 'Running'] = false;
    $AA['refresh'+moduleName] = function () {
        var newModule = $AA.automations();
        $AAE.xhr[moduleNameLowerFirst + 'Running'] = true;
        $AA.xhr[moduleNameLowerFirst] = newModule.getCampaigns().done(function (data) {
            $AAE.xhr[moduleNameLowerFirst + 'Running'] = false;
            var arr = data;

            for (var i = 0; i < arr.length; i++) {
                $AA.d.data[moduleNameLowerFirst][arr[i].campaignId] = arr[i];
            }
        });
        return $AA.xhr[moduleNameLowerFirst];
    };

    
    $AA.initBasicFunctions(Automations, "Automations");

});