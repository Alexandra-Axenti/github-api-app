var AccountName = require('./../js/main_backend.js').accountModule;

var displayRepos = function(name, reposList) {
  $('#showList').text(name + "holds the following repos:"+ reposList);
};

$(document).ready(function(){
  var currentUserObject = new AccountName();
  $('#mainDetails').click(function(){
    var name = $('#account_name').val();
    $('#account_name').val("");
    currentUserObject.getDetails(name, displayRepos);
  });
});
