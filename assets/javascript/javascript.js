

$("body").on("click", ".pet" ,function(){
      var dogBreed = "";
      dogBreed = $(this).attr("data-breed");
      console.log("WOW");
      $("#petMain").hide();
      swal({
            title: "Celebrities Discovered!!",
            text: "Here's some top listings of your Breed in Need!",
            icon: "success",
          });
      animalQuery();


      function animalQuery() {

            var queryURL = "http://api.petfinder.com/pet.find?format=json&key=890ea03f874b500ce1b9db838148bb69&animal=dog&breed="+dogBreed+"&location=94954";
        
        
        
            $.ajax({
              url: queryURL,
              type: "get",
              dataType: "jsonp",
              }).then(function(response) {
                    console.log('response', response);
                    
                    console.log(response);
        
        
        
                  // creates and appends 10 results from API for selected Breed  
                          for (var n=0; n<=10; n++){
                        
                          var quick = response.petfinder.pets.pet[n];   
        
                          var petAge = $("<div>");
                          petAge.attr("id","petInfo");
                          petAge.addClass("petdiv");
                          petAge.text(JSON.stringify(quick.age.$t));
                          console.log(petAge);
                          
                          petAge.append("<p>"+"Name: "+quick.name.$t+"</p>");
                          petAge.append("<p>"+"Info: "+quick.description.$t+"</p>");
                          
                          var imageDiv = $("<div style='width:150px; height:150px'>");
                          
                          var petImage = $("<img style='width:100%'>");
                          petImage.attr('src', quick.media.photos.photo[0].$t);
                          imageDiv.append(petImage);

                          petAge.prepend(imageDiv);
                          

                          
                          

                          $("#test").append(petAge);
                          
                          }
                  });
                        // creates button to return to celebrity selection
                          var goBackButt = $("<button>"+"Return To Choose Celebrity"+"</button>");
                          goBackButt.addClass("btn btn-success text-center");
                          goBackButt.attr("id", "goBack");
                          $("#test").append(goBackButt);
             
        };






});

function returnToCeleb (){
      $("#test").empty();
      $("#petMain").show();
}

$("body").on("click", "#goBack", function(){
      returnToCeleb();
})



// var location = "https://www.petfinder.com/member/us/ca/berkeley/home-at-last-animal-rescue"+ shelter     ID;          

