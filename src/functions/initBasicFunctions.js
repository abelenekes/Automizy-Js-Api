define([
    'automizyApi/core',
    'automizyApi/token'
], function ($AA) {
    $AA.initBasicFunctions = function (module, moduleName) {
        var module = module || false;
        if (module === false) {
            return false;
        }
        var moduleName = moduleName || false;
        if (moduleName === false)
            return false;
        var moduleNameLower = moduleName.toLowerCase();
        var moduleNameLowerFirst = moduleName.charAt(0).toLowerCase() + moduleName.slice(1);


        var p = module.prototype;

        p.init = p.init || function () {
                var t = this;
                
                t.d.xhr = t.d.xhr || {};
                t.d.xhr.get = false;
                t.d.xhr.insert = false;
                t.d.xhr.update = false;
                t.d.xhr.delete = false;
                t.d.xhr.export = false;
                t.d.xhr.getAll = false;
                t.d.xhr.getRecordById = false;
                t.d.xhr.getFieldById = false;
                t.d.xhr.getAllIdNamePair = false;

                if (typeof t.d.urlSuffix === 'undefined') {
                    t.d.urlSuffix = '';
                }
                if (typeof t.d.itemsDir === 'undefined') {
                    t.d.itemsDir = false;
                }
                if (typeof t.d.fields === 'undefined') {
                    t.d.fields = false;
                }
                if (typeof t.d.format === 'undefined') {
                    t.d.format = false;
                }
                if (typeof t.d.limit === 'undefined') {
                    t.d.limit = false;
                }
                if (typeof t.d.page === 'undefined') {
                    t.d.page = false;
                }
                if (typeof t.d.order_by === 'undefined') {
                    t.d.order_by = false;
                }
                if (typeof t.d.order_dir === 'undefined') {
                    t.d.order_dir = false;
                }
                if (typeof t.d.links === 'undefined') {
                    t.d.links = false;
                }
                if (typeof t.d.set === 'undefined') {
                    t.d.set = {};
                }
                if (typeof t.d.hasEmbedded === 'undefined') {
                    t.d.hasEmbedded = true;
                }
                if (typeof t.d.hasId === 'undefined') {
                    t.d.hasId = true;
                }
                if (typeof t.d.parentName === 'undefined') {
                    t.d.parentName = moduleNameLowerFirst;
                }
            };
        p.initParameter = p.initParameter || function (obj) {
                var t = this;
                if (typeof obj.urlSuffix !== 'undefined')
                    t.urlSuffix(obj.urlSuffix);
                if (typeof obj.itemsDir !== 'undefined')
                    t.itemsDir(obj.itemsDir);
                if (typeof obj.format !== 'undefined')
                    t.format(obj.format);
                if (typeof obj.fields !== 'undefined')
                    t.fields(obj.fields);
                if (typeof obj.limit !== 'undefined')
                    t.limit(obj.limit);
                if (typeof obj.page !== 'undefined')
                    t.page(obj.page);
                if (typeof obj.orderBy !== 'undefined' || typeof obj.order_by !== 'undefined')
                    t.orderBy(obj.orderBy || obj.order_by);
                if (typeof obj.orderDir !== 'undefined' || typeof obj.order_dir !== 'undefined')
                    t.orderDir(obj.orderDir || obj.order_dir);
                if (typeof obj.links !== 'undefined')
                    t.links(obj.links);
                if (typeof obj.url !== 'undefined')
                    t.url(obj.url);
            };

        p.setOptions = p.setOptions || function (obj) {
                if (typeof obj.fields !== 'undefined')
                    t.d.option.fields = obj.fields;  //mezők vesszővel
                if (typeof obj.format !== 'undefined')
                    t.d.option.format = obj.format; //format data
                if (typeof obj.limit !== 'undefined')
                    t.d.option.limit = obj.limit; //hány darab
                if (typeof obj.page !== 'undefined')
                    t.d.option.page = obj.page;  //hanyadik elemtől
                if (typeof obj.where !== 'undefined')
                    t.d.option.where = obj.where;  //feltétel
                if (typeof obj.order_by !== 'undefined')
                    t.d.option.order_by = obj.order_by; //mi szerint rendezzen
                if (typeof obj.order_dir !== 'undefined')
                    t.d.option.order_dir = obj.order_dir; //desc vagy asc
                if (typeof obj.order !== 'undefined')
                    t.d.option.order = obj.order; //name:desc
                if (typeof obj.links !== 'undefined')
                    t.d.option.links = obj.links; //milyen linkek kellenek vesszővel
            };
        p.getDataFromParameter = p.getDataFromParameter || function (obj) {
                var data = {};
                if (obj.fields !== false)
                    data.fields = obj.fields;
                if (obj.format !== false)
                    data.format = obj.format;
                if (obj.limit !== false)
                    data.limit = obj.limit;
                if (obj.page !== false)
                    data.page = obj.page;
                if (obj.where !== false)
                    data.where = obj.where;
                if (obj.order_dir !== false)
                    data.order_dir = obj.order_dir;
                if (obj.order_by !== false)
                    data.order_by = obj.order_by;
                if (obj.order !== false)
                    data.order = obj.order;
                if (obj.links !== false)
                    data.links = obj.links;
                return data;
            };

        p.get = p.get || function (obj, isMod, async) {
                var t = this;
                var isMod = true;   //modify the options from the 'obj' object
                if (typeof async !== 'undefined') {
                    async = $AA.parseBoolean(async);
                } else {
                    var async = true;
                }

                if (typeof isMod !== 'undefined') {
                    isMod = $AA.parseBoolean(isMod);
                }
                if (isMod && (typeof obj === 'object' || typeof obj === 'array')) {
                    t.setOptions(obj)
                }

                var data = {};
                if (typeof obj === 'object' || typeof obj === 'array') {
                    data = t.getDataFromParameter(obj);
                } else {
                    for (var i in t.d.option) {
                        if (t.d.option[i] !== false) {
                            data[i] = t.d.option[i];
                        }
                    }
                }

                if (typeof data.order === 'undefined' && typeof data.order_by !== 'undefined') {
                    data.order = data.order_by + ':' + data.order_dir || 'asc'
                }

                t.d.xhr.get = $.ajax({
                    url: t.d.url + t.d.urlSuffix,
                    type: 'GET',
                    dataType: 'json',
                    async: async,
                    data: data,
                    headers: {Authorization: 'Bearer ' + $AA.token().get()},
                    error: $AA.token().error()
                });
                if (!async) {
                    return t.d.xhr.get.responseJSON;
                }
                return t.d.xhr.get;
            };
        p.getSync = p.getSync || function (obj, isMod) {
                var obj = obj || false;
                var isMod = isMod || false;
                return this.get.apply(this, [obj, isMod, false]);
            };
        p.export = p.export || function (obj, isMod, async) {
                var t = this;
                var isMod = true;
                if (typeof async !== 'undefined') {
                    async = $AA.parseBoolean(async);
                } else {
                    var async = true;
                }

                if (typeof isMod !== 'undefined') {
                    isMod = $AA.parseBoolean(isMod);
                }
                if (isMod && (typeof obj === 'object' || typeof obj === 'array')) {
                    t.setOptions(obj)
                }

                var data = {};
                if (typeof obj === 'object' || typeof obj === 'array') {
                    data = t.getDataFromParameter(obj);
                } else {
                    for (var i in t.d.option) {
                        if (t.d.option[i] !== false) {
                            data[i] = t.d.option[i];
                        }
                    }
                }

                if (typeof data.order === 'undefined' && typeof data.order_by !== 'undefined') {
                    data.order = data.order_by + ':' + data.order_dir || 'asc'
                }
                data.showContent = false;
                t.d.xhr.export = $.ajax({
                    xhr: function () {
                        var xhr = new window.XMLHttpRequest();
                        xhr.addEventListener("progress", function (evt) {

                            if (evt.lengthComputable) {
                                var percentComplete = evt.loaded / evt.total;
                                console.log(parseInt(percentComplete * 100));
                            }
                        }, false);
                        return xhr;
                    },
                    url: t.d.url + t.d.urlSuffix,
                    type: 'GET',
                    //dataType: 'json',
                    async: async,
                    data: data,
                    headers: {
                        Authorization: 'Bearer ' + $AA.token().get(),
                        Accept: 'text/csv'
                    },
                    error: $AA.token().error()
                });
                if (!async) {
                    return t.d.xhr.export.responseJSON;
                }
                return t.d.xhr.export;
            };

        p.insert = p.insert || function (obj, async) {
                var t = this;
                if (typeof async !== 'undefined') {
                    async = $AA.parseBoolean(async);
                } else {
                    var async = true;
                }

                var data = obj;

                t.d.xhr.insert = $.ajax({
                    url: t.d.url + t.d.urlSuffix,
                    type: 'POST',
                    dataType: 'json',
                    async: async,
                    data: data,
                    headers: {Authorization: 'Bearer ' + $AA.token().get()},
                    error: $AA.token().error()
                });
                if (!async) {
                    return t.d.xhr.insert.responseJSON;
                }
                return t.d.xhr.insert;
            };
        p.insertSync = p.insertSync || function (obj) {
                var obj = obj || false;
                return this.insert.apply(this, [obj, false]);
            };

        p.update = p.update || function (obj, id, async) {
                var t = this;
                if (typeof async !== 'undefined') {
                    async = $AA.parseBoolean(async);
                } else {
                    var async = true;
                }

                var data = obj;
                var id = id || obj.id || 0;
                delete data.id;

                t.d.xhr.update = $.ajax({
                    url: t.d.url + '/' + id + t.d.urlSuffix,
                    type: 'PATCH',
                    dataType: 'json',
                    async: async,
                    data: data,
                    headers: {Authorization: 'Bearer ' + $AA.token().get()},
                    error: $AA.token().error()
                });
                if (!async) {
                    return t.d.xhr.update.responseJSON;
                }
                return t.d.xhr.update;
            };
        p.updateSync = p.updateSync || function (obj, id) {
                var obj = obj || false;
                var id = id || false;
                return this.update.apply(this, [obj, id, false]);
            };

        p.delete = p.delete || function (id, async) {
                var t = this;
                if (typeof async !== 'undefined') {
                    async = $AA.parseBoolean(async);
                } else {
                    var async = true;
                }

                t.d.xhr.delete = $.ajax({
                    url: t.d.url + '/' + id + t.d.urlSuffix,
                    type: 'DELETE',
                    dataType: 'json',
                    async: async,
                    headers: {Authorization: 'Bearer ' + $AA.token().get()},
                    error: $AA.token().error()
                });
                if (!async) {
                    return t.d.xhr.delete.responseJSON;
                }
                return t.d.xhr.delete;
            };
        p.deleteSync = p.deleteSync || function (id) {
                var id = id || false;
                return this.delete.apply(this, [id, false]);
            };


        /*
         [
         [
         ['name', '=', 'Tilda'],
         ['age', '<=', 18]
         ],
         [
         ['name', 'like', 'Thom%'],
         ['age', 'in', [18, 20, 21]]
         ],
         [
         ['name', 'like', 'Thom%'],
         ['age', 'between', [18, 22]]
         ]
         ]
         */


        p.getAll = p.getAll || function () {
                var t = this;
                t.d.xhr.getAll = $.ajax({
                    url: t.d.url + t.d.urlSuffix,
                    type: 'GET',
                    dataType: 'json',
                    headers: {Authorization: 'Bearer ' + $AA.token().get()},
                    error: $AA.token().error()
                });
                return t.d.xhr.getAll;
            };
        p.getRecordById = p.getRecordById || function (id) {
                var t = this;

                var data = {};

                for (var i in t.d.option) {
                    if (t.d.option[i] !== false) {
                        data[i] = t.d.option[i];
                    }
                }

                if (typeof data.order === 'undefined' && typeof data.order_by !== 'undefined') {
                    data.order = data.order_by + ':' + data.order_dir || 'asc'
                }

                t.d.xhr.getRecordById = $.ajax({
                    url: t.d.url + '/' + id + t.d.urlSuffix,
                    type: 'GET',
                    dataType: 'json',
                    data: data,
                    headers: {Authorization: 'Bearer ' + $AA.token().get()},
                    error: $AA.token().error()
                });
                return t.d.xhr.getRecordById;
            };
        p.getFieldById = p.getFieldById || function (id, fieldName) {
                var t = this;
                var fieldTree = fieldName.split('.');
                t.d.xhr.getFieldById = $.ajax({
                    url: t.d.url + '/' + id + t.d.urlSuffix,
                    type: 'GET',
                    dataType: 'json',
                    data: {fields: fieldTree[0], links: ''},
                    headers: {Authorization: 'Bearer ' + $AA.token().get()},
                    converters: {
                        'text json': function (result) {
                            var field = $.parseJSON(result)[fieldTree[0]];
                            for (var i = 1; i < fieldTree.length; i++) {
                                field = field[fieldTree[i]];
                            }
                            return field;
                        }
                    },
                    error: $AA.token().error()
                });
                return t.d.xhr.getFieldById;
            };
        p.getAllIdNamePair = p.getAllIdNamePair || function (nameFieldName) {
                var t = this;
                var fieldTree = nameFieldName.split('.');
                t.d.xhr.getAllIdNamePair = $.ajax({
                    url: t.d.url + t.d.urlSuffix,
                    type: 'GET',
                    dataType: 'json',
                    data: {fields: 'id,' + fieldTree[0], links: ''},
                    headers: {Authorization: 'Bearer ' + $AA.token().get()},
                    converters: {
                        'text json': function (result) {
                            var res = $.parseJSON(result)._embedded;
                            res = res[Object.keys(res)[0]];
                            var arr = [];
                            for (var i in res) {
                                var field = res[i][fieldTree[0]];
                                for (var j = 1; j < fieldTree.length; j++) {
                                    field = field[fieldTree[j]];
                                }
                                arr.push([res[i]['id'], field]);
                            }
                            return arr;
                        }
                    },
                    error: $AA.token().error()
                });
                return t.d.xhr.getAllIdNamePair;
            };


        p.urlSuffix = p.urlSuffix || function (urlSuffix) {
                var t = this;
                if (typeof urlSuffix !== 'undefined') {
                    t.d.urlSuffix = urlSuffix;
                    return t;
                }
                return t.d.urlSuffix;
            };
        p.itemsDir = p.itemsDir || function (itemsDir) {
                var t = this;
                if (typeof itemsDir !== 'undefined') {
                    t.d.itemsDir = itemsDir;
                    return t;
                }
                return t.d.itemsDir;
            };
        p.fields = p.fields || function (fields) {
                var t = this;
                if (typeof fields !== 'undefined') {
                    if (fields !== false && fields.length > 0) {
                        t.d.option.fields = fields;
                    }
                    return t;
                }
                return t.d.option.fields;
            };
        p.limit = p.limit || function (limit) {
                var t = this;
                if (typeof limit !== 'undefined') {
                    t.d.option.limit = limit;
                    return t;
                }
                return t.d.option.limit;
            };
        p.format = p.format || function (format) {
                var t = this;
                if (typeof format !== 'undefined') {
                    t.d.option.format = format;
                    return t;
                }
                return t.d.option.format;
            };
        p.page = p.page || function (page) {
                var t = this;
                if (typeof page !== 'undefined') {
                    t.d.option.page = page;
                    return t;
                }
                return t.d.option.page;
            };
        p.where = p.where || function (where) {
                var t = this;
                if (typeof where !== 'undefined') {
                    t.d.option.where = where;
                    return t;
                }
                return t.d.option.where;
            };
        p.orderBy = p.order_by = p.orderBy || p.order_by || function (order_by) {
                var t = this;
                if (typeof order_by !== 'undefined') {
                    if (order_by === false)return t;
                    t.d.option.order_by = order_by;
                    return t;
                }
                return t.d.option.order_by;
            };
        p.orderDir = p.order_dir = p.orderDir || p.order_dir || function (order_dir) {
                var t = this;
                if (typeof order_dir !== 'undefined') {
                    if (order_dir === false)return t;
                    t.d.option.order_dir = order_dir;
                    return t;
                }
                return t.d.option.order_dir;
            };
        p.order = p.order || function (order) {
                var t = this;
                if (typeof order !== 'undefined') {
                    if (order === false)return t;
                    t.d.option.order = order;
                    return t;
                }
                return t.d.option.order;
            };
        p.links = p.links || function (links) {
                var t = this;
                if (typeof links !== 'undefined') {
                    t.d.option.links = links;
                    return t;
                }
                return t.d.option.links;
            };
        p.set = p.values = p.set || p.values || function (set, value) {
                var t = this;
                if (typeof set === 'string' && typeof value !== 'undefined') {
                    t.d.option.set[set] = value;
                    return t;
                }
                if (typeof set === 'object' || typeof set === 'array') {
                    for (var i in set) {
                        t.d.option.set[i] = set[i];
                    }
                    return t;
                }
                return t.d.option.set;
            };

        $AA.m[moduleName] = module;
        $AA[moduleNameLowerFirst] = function (obj) {
            var t = new module(obj);
            return t;
        };
        $AA.d.data[moduleNameLowerFirst] = {};


        $AA.xhr[moduleNameLowerFirst + 'Running'] = false;
        $AA['refresh'+moduleName+'DefaultOptions'] = {};
        $AA['refresh'+moduleName] = function (defaultOptions) {
            var newModule = $AA[moduleNameLowerFirst]();

            var options = defaultOptions || $AA['refresh'+moduleName+'DefaultOptions'];
            if(typeof options.order !== 'undefined'){
                $AA['refresh'+moduleName+'DefaultOptions'].order;
                newModule = newModule.order(options.order);
            }

            $AAE.xhr[moduleNameLowerFirst + 'Running'] = true;
            $AA.xhr[moduleNameLowerFirst] = newModule.get().done(function (data) {
                $AAE.xhr[moduleNameLowerFirst + 'Running'] = false;
                if(newModule.d.hasEmbedded){
                    var arr = data._embedded[newModule.d.parentName];
                }else {
                    var arr = data;
                }

                for (var i = 0; i < arr.length; i++) {
                    if(newModule.d.hasId) {
                        $AA.d.data[moduleNameLowerFirst][arr[i].id] = arr[i];
                    }else{
                        $AA.d.data[moduleNameLowerFirst][arr[i]] = arr[i];
                    }
                }
            });
            return $AA.xhr[moduleNameLowerFirst];
        };
    };
})
;