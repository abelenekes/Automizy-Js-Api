define([
    'automizyApi/core',
    'automizyApi/functions/urlManager',
    'automizyApi/functions/initBasicFunctions',
    'automizyApi/token'
], function () {
    var TransactionalEmails = function (obj) {
        var t = this;
        t.d = {
            parentName: 'transactionalEmails'
        };
        t.init();

        t.initParameter(obj || {});
    };

    var p = TransactionalEmails.prototype;

    p.copy = function (id, data, done) {
        var t = this;
        var data = data || {};
        data.copyData = data.copyData || {};
        var done = done || function(){};
        return t.getRecordById(id).done(function(getData){
            var insertData = {
                name:data.name || ((data.copyData.prefix || '') + getData.name + (data.copyData.suffix || '')),
                subject:data.subject || getData.subject,
                editorCode:data.editorCode || getData.editorCode,
                htmlCode:data.htmlCode || getData.htmlCode,
                maxWidth:data.maxWidth || getData.maxWidth,
                tags:data.tags || getData.tags
            };
            return t.insert(insertData).done(function(localData){
                done.apply(t, [localData]);
            });
        });
    };



    $AA.initBasicFunctions(TransactionalEmails, "TransactionalEmails", {
        url:'transactional',
        useBaseUrl:true
    });

});