$( document ).ready(function() {
  $(".tagSelection").html(checkboxList());
});

$("#searchButton").click(function() {
  $("#articles").empty();
  printSearch();
});

function findLitTags() {
  var tagList = [];
  for (i in lit.literature){
    for (t in lit.literature[i].tags) {
      var l = lit.literature[i].tags[t];
      if (tagList.includes(l)){
      } else {
        tagList.push(l);
      }
    }
  }
  return tagList.sort();
};

function checkboxGeneration(x) {
  return "<input type=\"checkbox\" class=\"searchTag\" id="+x+" value="+x+"><label for="+x+">"+x+"</label> <br />"
}

function checkboxList() {
  var list = findLitTags();
  var output = "";
  for (i in list) {
    var x = checkboxGeneration(list[i]);
    output += x;
  }
  return output;
}

function search() {
  var searchList = [];
  var searchOutput = [];
  $("input:checkbox:checked").each(function(){
      searchList.push($(this).val());
  });
  for (article in lit.literature) {
    for (tag in lit.literature[article].tags) {
      var specificTag = lit.literature[article].tags[tag];
      if (searchList.includes(specificTag) && !searchOutput.includes(lit.literature[article])) {
        searchOutput.push(lit.literature[article]);
      }
    }
  }
  return searchOutput.sort();
}

function printSearch() {
  var articleList = search();
  var container = document.getElementById("articles")
  for (i in articleList) {
    var article = articleList[i];
    var parsedTags = article.tags[0];
    for (i in article.tags) {
      if (i == 0) {
      } else {
        parsedTags += ", ";
        parsedTags += article.tags[i];
      }
    }
    var parsedArticle = `
    <div class=\"article\">
      <h1>${article.title}</h1>
      <p>${article.author}</p>
      <p>${article.summary}</p>
      <p>Tags: ${parsedTags}</p>
      <p>PMID: ${pmidToURL(article.pmid)}</p>
    </div>
    `;
    $("#articles").append(parsedArticle);
  }
}

function pmidToURL(pmid) {
  return `<a href="https://www.ncbi.nlm.nih.gov/pubmed/${pmid}">${pmid}</a>`
}
