console.log("hello world");

function animalQuery() {

    var queryURL = "http://api.petfinder.com/pet.find?format=json&key=890ea03f874b500ce1b9db838148bb69&animal=dog&breed="+breed+"location="+zip;
      

    $.ajax({
      url: queryURL,
      type: "get",
      dataType: "jsonp",
      }).then(function(response) {
            console.log('cry', response);
      });
    
};

var location = "https://www.petfinder.com/member/us/ca/berkeley/home-at-last-animal-rescue"+ shelterID;          
animalQuery();