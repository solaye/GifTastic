$(document).ready(function () {
// Creates array that has initial set of shows. 
    var topics = ['Seinfeld', 'Friends', 'Martin', 'The Fresh Prince', 'Curb Your Enthusiasm']
//function to create buttons 
    function makeButtons() {
        $("#sitcom-buttons").empty();
        for (i = 0; i < topics.length; i++) {
            $("#sitcom-buttons").append("<button class='btn btn-success' data-topic='" + topics[i] + "'>" + topics[i] + "</button>");
        }
    }

    makeButtons();
    //click function to call API & inserts sitcom variable into search entry of the queryURL
    $('#sitcom-buttons').on('click', function (event) {
        event.preventDefault();
        $("#sitcom").empty();
        console.log(event.target.attributes[1].value);
        var sitcom = event.target.attributes[1].value;
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + sitcom + "&api_key=qdmbZ68OqH6SL6TYYuxylz1Xp3tDMYfQ&limit=10";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            var gifs = response.data;
//for loop that that will append actual GIF as well as show the rating under each gif 
            for (i = 0; i < gifs.length; i++) {
                $("#sitcom").append('<img id="sitcomImg" src=' + gifs[i].images.original.url + ' />')
                $("#sitcom").append('<p> ' + gifs[i].rating + ' </p>')

            }
        })
    })





//takes input from text field and utilizes it to create a new button and push new item into the array. 


    $('#add-sitcom').on('click', function (event) {

        event.preventDefault();
        console.log('Button Clicked');
        var sitcomInput = $("#sitcom-input").val()
        console.log(sitcomInput);
        topics.push(sitcomInput);
        makeButtons();

    })







})