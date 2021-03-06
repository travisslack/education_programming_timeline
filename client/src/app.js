var AjaxRequest = require('./services/ajax_request');
var Timeline = require('./services/timeline_animation');
var LanguageView = require('./views/languages_view');
var IndivLangView = require('./views/indiv_lang_view');
var TimelineView = require('./views/timeline_view');
var TextView = require('./views/text_view');

var app = function(){

    var ajaxRequest = new AjaxRequest('http://localhost:3000/api/languages');
    var ajaxTextRequest = new AjaxRequest('http://localhost:3000/api/text/Programming%20Lauguages%20Through%20The%20Ages');
    var timelineView = new TimelineView();
    var textView = new TextView();
    var homeButton = document.querySelector('#homebutton');
    

    var buttonSetter = function (){
        var forward = document.getElementById('forward');
        var back = document.getElementById('back');
        back.disabled = true;

        forward.addEventListener('click', buttonHandler);
        back.addEventListener('click', buttonHandler);
    }

    buttonSetter();

    ajaxTextRequest.get(textView.render);
    ajaxRequest.get(timelineView.render)

    homeButton.addEventListener("click", resetHome)
    
}


var buttonHandler = function(){
    timeline = new Timeline();
    var forward = document.getElementById('forward');
    var back = document.getElementById('back');
    var indivLangView = new IndivLangView();
    var url = 'http://localhost:3000/api/languages/';
    const modifier = (this.classList.contains("prev-arrow")) ? -1 : 1;
    if(document.querySelector('#language-id')){

        var nextId = parseInt(document.querySelector('#language-id').textContent) + modifier;
        var request = new AjaxRequest(url + parseInt(nextId));
        request.get(indivLangView.render);
        timeline.setBtnState(forward, false);
        timeline.setBtnState(back, false);
        console.log(nextId)
        if(nextId + 1 === 13){
            timeline.setBtnState(forward);
        }
        else if(nextId - 1 === 0){
            timeline.setBtnState(back);
        }
    }
    else{
     var request = new AjaxRequest(url + parseInt(1));
     request.get(indivLangView.render); 
    timeline.setBtnState(back, false);
 }

}

var resetHome = function(){
    var section = document.querySelector('#main-view')
    var timelineIcons = document.querySelector('#timeline-list')
    section.innerHTML = '';
    timelineIcons.innerHTML = '';
    app()
}

window.addEventListener('load', app);