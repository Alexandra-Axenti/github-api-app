var AccountName  = require('./../js/main_backend.js').accountModule;

var displayRepos = function(name, reposList) {

  $('.showList').text("GitHub User " + name + " holds the following repos:    ");
  var answer = reposList.forEach(function(element) {
  $('#solution').append("<li>" + element + "</li>");
  });
};

// console.log(reposArray);

$(document).ready(function(){
  var currentUserObject = new AccountName();
  $('#nameDetails').click(function(){
      // event.preventDefault();
      $('#solution').text("");
      var name = $('#account_name').val();
      $('#account_name').val("");

      currentUserObject.getDetails(name, displayRepos);
  });
});
