// import { CSL } from 'citeproc';
var CitationHandler = (function () {
    function CitationHandler() {
    }
    CitationHandler.prototype.prepareRef = function () {
        var citations = {};
        var itemIDs = [];
        console.info('this.ref =', this.ref);
        for (var i = 0, ilen = this.ref.length; i < ilen; i++) {
            var item = this.ref[i];
            console.info('item =', item);
            if (!item.issued)
                continue;
            if (item.URL)
                delete item.URL;
            var id = item.id;
            citations[id] = item;
            itemIDs.push(id);
        }
        var citeprocSys = {
            retrieveLocale: function (lang) {
                var xhr = new XMLHttpRequest();
                xhr.open('GET', 'https://raw.githubusercontent.com/Juris-M/citeproc-js-docs/master/locales-' + lang + '.xml', false);
                xhr.send(null);
                return xhr.responseText;
            },
            retrieveItem: function (id) {
                return citations[id];
            }
        };
        function getProcessor() {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://raw.githubusercontent.com/citation-style-language/styles/master/ieee-with-url.csl', //'https://raw.githubusercontent.com/citation-style-language/styles/master/' + styleID + '.csl',
            false);
            xhr.send(null);
            var styleAsText = xhr.responseText;
            return { updateItems: function (ids) { return null; }, makeBibliography: function () { return null; } };
            //return new CSL.Engine(citeprocSys, styleAsText);
        }
        function processorOutput() {
            var ret = '';
            var citeproc = getProcessor();
            citeproc.updateItems(itemIDs);
            var result = citeproc.makeBibliography();
            return result[1].join('\n');
        }
    };
    return CitationHandler;
}());
//# sourceMappingURL=/home/samuel/repos/glaucoma-australia/glaucoma-risk-calc-web-frontend/src/src/app/risk-quiz/citation-handler.js.map