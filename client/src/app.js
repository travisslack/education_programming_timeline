var AjaxRequest = require('./services/ajax_request');
var LanguageView = require('./views/languages_view');
var IndivLangView = require('./views/indiv_lang_view');
var TimelineView = require('./views/timeline_view');
var TextView = require('./views/text_view');

var app = function(){
    
    var ajaxRequest = new AjaxRequest('http://localhost:3000/api/languages');
    var ajaxTextRequest = new AjaxRequest('http://localhost:3000/api/text/History');
    var indivLangView = new IndivLangView();
    var timelineView = new TimelineView();
    var languageView = new LanguageView();
    var textView = new TextView();
    //call view pass 

    ajaxRequest.get(timelineView.render)
    //pass the get a view callback
    ajaxRequest.get(languageView.render);

    //ready for history text request
    ajaxTextRequest.get(textView.render);


    
}

window.addEventListener('load', app);