var topics = ["dog", "cat", "hamster", "rabbit", "pig", "raccoon", "panda"];

function createButtons() {
    $("#button-container").empty();
    for (i = 0; i < topics.length; i++) {
        var animalButton = $("<button>");
        animalButton.attr("data-animal", topics[i]);
        animalButton.attr("class", "animal-button")
        animalButton.text(topics[i]);
        $("#button-container").append(animalButton);
    }
}

createButtons();

$(document).on('click', '.animal-button', function () {
    var animalName = $(this).attr("data-animal");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animalName + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            $("#image-container").empty();
            var results = response.data;
            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div>");
                var rating = results[i].rating;
                var p = $("<p>").text("Rating: " + rating);
                var animatedImage = $("<img class='animated-image>");
                animatedImage.addClass("animated-image");
                animatedImage.attr("src", results[i].images.fixed_height.url);
                var stillImage = $("<img>");
                stillImage.addClass("still-image");
                stillImage.attr("src", results[i].images.fixed_height_still.url);
                gifDiv.append(p);
                gifDiv.append(animatedImage);
                gifDiv.append(stillImage);
                $("#image-container").prepend(gifDiv);
            }
            $(".animated-image").hide();
        });
});

$("#add-animal-button").on("click", function (event) {
    event.preventDefault();
    var newAnimal = $("#search-bar").val();
    topics.push(newAnimal);
    createButtons();
});

$(".still-image").click(function(){
    this.

});