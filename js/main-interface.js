var AccountName  = require('./../js/main_backend.js').accountModule;

var displayRepos = function(name, reposList) {
  $('.showList').text("GitHub User" + name + "holds the following repos:"+ reposList);
};

// console.log(reposArray);


$(document).ready(function(){
// console.log('js ready');
  var currentUserObject = new AccountName();
  $('#nameDetails').click(function(){
      // event.preventDefault();
    var name = $('#account_name').val();
    $('#account_name').val("");
    currentUserObject.getDetails(name, displayRepos);
  });
});
