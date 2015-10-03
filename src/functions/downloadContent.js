define([
    'automizyApi/core'
], function () {

    $AA.downloadContent = function (content, filename) {
        var supportsDownloadAttribute = 'download' in document.createElement('a');
        if(supportsDownloadAttribute) {
            var link = $('<a></a>');
            link.attr({
                href: 'data:attachment/csv,' + encodeURI(content),
                target: '_blank',
                download: filename
            })[0].click();
            setTimeout(function() {
                link.remove();
            }, 50);
        } else if(typeof safari !== 'undefined') {
            window.open('data:attachment/csv,' + encodeURI(content));
        }else if (window.navigator.msSaveOrOpenBlob) {
            var blob = new Blob([content], {type: "text/plain"});
            navigator.msSaveBlob(blob, filename);
        } else {
            alert($A.translate('Your browser is not supported the csv export.'))
        }
    };

});