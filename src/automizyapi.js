requirejs.config({
    waitSeconds: requirejs.s.contexts._.config.waitSeconds || 20,
    paths: {
        automizyApi: requirejs.s.contexts._.config.paths.automizyApi || requirejs.s.contexts._.config.paths.automizyJsApiDir || '../src'
    }
});
define([
    "automizyApi/core",
    "automizyApi/token",

    "automizyApi/apis/segments",
    "automizyApi/apis/campaigns",
    "automizyApi/apis/splitTests",
    "automizyApi/apis/newsletters",
    "automizyApi/apis/contacts",
    "automizyApi/apis/customFields",
    "automizyApi/apis/users",
    "automizyApi/apis/jobs",
    "automizyApi/apis/webhooks",
    "automizyApi/apis/templates",
    "automizyApi/apis/forms",
    "automizyApi/apis/automations",
    "automizyApi/apis/contactImports",
    "automizyApi/apis/tags",

    "automizyApi/apis/account",
    "automizyApi/apis/accountStatistics",
    "automizyApi/apis/clients",
    "automizyApi/apis/updates",
    "automizyApi/apis/plugins",

    "automizyApi/functions/initBasicFunctions",
    "automizyApi/functions/parseBoolean",
    "automizyApi/functions/date",
    //"automizyApi/functions/store",
    "automizyApi/functions/cookie",
    "automizyApi/functions/refreshTable",
    "automizyApi/functions/exportTable",
    "automizyApi/functions/downloadContent"
], function () {
    console.log('%c AutomizyJsApi module loaded! ', 'background: #000000; color: #bada55; font-size:14px');
});
