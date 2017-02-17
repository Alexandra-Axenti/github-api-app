var Account_name = require('./../js/main_backend.js').accountModule;

var displayRepos = function(name, description) {
  $('#solution').text(name + "holds the following repos:"+ description);
}


$(document).ready(function(){
  var currentUserObject = new Account_name();
  $('#mainDetails').click(function(){
    var name = $('#account_name').val();
    $('#account_name').val("");
    currentUserObject.getDetails(city, displayRepos);
  });
});
