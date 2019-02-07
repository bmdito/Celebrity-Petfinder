console.log("hello world");

function animalQuery() {

    var queryURL = "https://cors-anywhere.herokuapp.com/http://api.petfinder.com/pet.find?format=json&key=890ea03f874b500ce1b9db838148bb69&animal=dog&count=10&breed="+BREED+ "location="+ZIPCODE;


    $.ajax({
      url: queryURL,
      type: "get",
      dataType: "json",
      }).then(function(response) {
            console.log('cry', response);
      });
    
};

animalQuery();

