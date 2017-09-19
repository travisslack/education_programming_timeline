var AjaxRequest = require('../services/ajax_request');
var LineChart = require('./lineChart.js')
var IndivLangView = function() {

}

IndivLangView.prototype.render = function(language) {

    var section = document.getElementById('main-view');
    //removes any elements from main view
    section.innerHTML = '';
    //create elements
    var title = document.createElement('h2');
    var author = document.createElement('h3');
    var desc = document.createElement('p');
    var year = document.createElement('p');
    var usedBy = document.createElement('p');
    var usedFor = document.createElement('p');
    var exCode = document.createElement('pre');
    var docsList = document.createElement('ul');
    var linksList = document.createElement('ul');
    var prosList = document.createElement('ul');
    var consList = document.createElement('ul');
    var popularity = document.createElement('section')
    var proListTitle = document.createElement('h4');
    var conListTitle = document.createElement('h4');
    var docListTitle = document.createElement('h4');
    var linksTitle = document.createElement('h4');

    //adding data
    title.innerText = language[0].language + " - " + language[0].year;
    author.innerText = "Created by: " +language[0].author;
    desc.innerText = language[0].description;
    // year.innerText = language[0].year;
    usedBy.innerText = language[0].usedBy;
    usedFor.innerText = language[0].usedFor;
    exCode.innerText = language[0].exampleCode;
    proListTitle.innerText = "Pros:"
    conListTitle.innerText = "Cons:"
    docListTitle.innerText = "Documentation:"
    linksTitle.innerText = "Useful Links:"
    popularity.id = "popChart";
    

    //appending tags
    section.appendChild(title);
    section.appendChild(author);
    section.appendChild(desc);
    // section.appendChild(year);
    section.appendChild(usedBy);
    section.appendChild(usedFor);
    section.appendChild(exCode);
    section.appendChild(proListTitle);
    section.appendChild(conListTitle);
    section.appendChild(docListTitle);
    section.appendChild(linksTitle);
    proListTitle.appendChild(prosList);
    conListTitle.appendChild(consList);
    docListTitle.appendChild(docsList);
    linksTitle.appendChild(linksList);
    section.appendChild(popularity);
    // popularity.appendChild(chart);
    console.log(language[0].pros);
    new LineChart(language);

    var linkGenerate = function(list, appendTo){ 
        list.forEach(function(item){
            var listItem = document.createElement('li');
            listItem.innerHTML = `<a href = "${item}">Link</a>`; 
            console.log("test", item)
            appendTo.appendChild(listItem);
            
        })
    }

    var listGenerate = function (list, appendTo) {
        list.forEach(function (item) {
            var listItem = document.createElement('li');
            listItem.innerHTML =item;
            console.log("test", item)
            appendTo.appendChild(listItem);

        })
    }

    listGenerate(language[0].pros, prosList)
    listGenerate(language[0].cons, consList)
    linkGenerate(language[0].documentation, docsList)
    linkGenerate(language[0].links, linksList)

    
}

// IndivLangView.prototype.listGenerate = function(list, appendTo){ 
//     list.forEach(function(item){
//         var listItem = document.createElement('li');
//         listItem.innerText = item; 
//         appendTo.appendChild(listItem);
//     })
// }

//side button for main container
IndivLangView.prototype.sideButton = function(){

    var container = document.getElementsByClassName('container');

    var leftButton = document.createElement('button');
    var rightButton = document.createElement('button');

    container.appendChild(leftButton);
    container.appendChild(rightButton);
}


module.exports = IndivLangView;

