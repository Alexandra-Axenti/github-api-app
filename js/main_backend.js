var apiKey = require('./../.env').apiKey;

function AccountName(){

}

AccountName.prototype.getDetails = function (name, description) {
  // exports.getRepos = function(){
    $.get('https://api.github.com/users/' + name + '/repos' + '?access_token=' + apiKey).then(function(response){
      console.log('then run');
      var reposArray = [];
      for (var key in response) {
      reposArray.push(response[key].name);
      }
      // how to use jquery response.each();
      console.log(reposArray);
      description(name, response);
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  // };
};


exports.accountModule = AccountName;
