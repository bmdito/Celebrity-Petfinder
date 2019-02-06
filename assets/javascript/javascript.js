console.log("hello world");

function animalQuery() {

    var queryURL = "http://api.petfinder.com/breed.list?format=json&key=890ea03f874b500ce1b9db838148bb69&animal=dog";


    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
            console.log(response);
      });
    
};

animalQuery();

