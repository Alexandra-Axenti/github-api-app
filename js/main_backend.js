var apiKey = require('./../.env').apiKey;

function Account_name(){}

Account_name.prototype.getDetails = function (name, description) {
  exports.getRepos = function(){
    $.get('https://api.github.com/users/'+ name +'?access_token=' + apiKey).then(function(response){
      console.log(response);
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  };
};


exports.accountModule = Account_name;
