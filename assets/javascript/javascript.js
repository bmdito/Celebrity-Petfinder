console.log("hello world");

function animalQuery() {

    var queryURL = "http://api.petfinder.com/pet.find?format=json&key=890ea03f874b500ce1b9db838148bb69&animal=dog&breed=Akita&location=94530";



    $.ajax({
      url: queryURL,
      type: "get",
      dataType: "jsonp",
      }).then(function(response) {
            console.log('response', response);
            // $("#testing").text(JSON.stringify(response));
            console.log(response);



            // $(document).on('click',".flip-card",function(){
                  for (var n=0; n<=10; n++){
                  // var petAge = $("<div>");
                  // petAge.attr("id","petInfo");
                  // petAge.text(JSON.stringify(response.petfinder.pets.pet[n]));
                  // console.log(petAge);
                 

                  var petAge = $("<div>");
                  petAge.attr("id","petInfo");
                  petAge.addClass("petdiv");
                  petAge.text(JSON.stringify(response.petfinder.pets.pet[n].age.$t));
                  console.log(petAge);
                  $("#testing").append(petAge);

                  // var eachPet = $("<div>");
                  // eachPet.attr("id","petInfo");
                  // eachPet.text(JSON.stringify(response.petfinder.pets.pet[n]));
                  // console.log(petAge);
                  // $("#testing").append(petAge);
                  
                  }
                  });

            
      // });
}   




// var location = "https://www.petfinder.com/member/us/ca/berkeley/home-at-last-animal-rescue"+ shelter     ID;          
animalQuery();
