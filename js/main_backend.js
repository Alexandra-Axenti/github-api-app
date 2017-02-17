var apiKey = require('./../.env').apiKey;

function AccountName(){}

AccountName.prototype.getDetails = function (name, description) {
  exports.getRepos = function(){
    $.get('https://api.github.com/users/'+name+'?access_token=' + apiKey).then(function(response){
      console.log(JSON.stringify(response));
      displayFunction(name, response);
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  };
};


exports.accountModule = Account_name;
