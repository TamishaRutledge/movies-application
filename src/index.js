/**
 * es6 modules and imports
 */
import sayHello from './hello';

sayHello('World');

/**
 * require style imports
 */
// const {getMovies} = require('./api.js');


$("#movieTable").append("Loading...");

//----------------------------------------THIS IS THE LIST OF MOVIES--------------------------------------------------//
$.ajax('/api/movies').done(function (data) {
    $("#movieTable").html("");

    data.forEach(function (movie) {
        $("#movieTable").append(`<tr><td>${movie.id}</td><td>${movie.title}</td><td>${movie.rating}</td></tr>`);

    });

});

//--------------------------------------THIS ADDS MOVIES TO THE JSON OBJECT-------------------------------------------//
$("#addMovieButton").click(function (event) {
    event.preventDefault();

    $.ajax("/api/movies", {
    type: "POST",
    dataType: "json",
    data: {
        title: $("#movieTitle").val(),
        rating: $('input[name=rating]:checked').val()
    }
});
//------------------------THIS ADDS THE MOVIES TO THE TABLE ON THE PAGE(HTML AND NOT THE JSON FILE)-----------------//
    $("#movieTable").append(`<tr><td>${$("#movieTitle").val()}</td><td>${$('input[name=rating]:checked').val()}</td></tr>`);
    $("#movie-dropdown").append(`<option>${$("#movieTitle").val()}</option>`);
});

//--------------------------------------THIS IS THE EDIT SECTION OF THE PAGE------------------------------------------//
$.ajax('/api/movies').done(function (data) {
   // $("#movieTable").html("");

    data.forEach(function (movie) {
        $("#movie-dropdown").append(`<option>${movie.id}${" "}${movie.title}</option>`);


    });
});

$("#editMovieButton").click(function (event) {
    event.preventDefault();
    let id = $("#movie-dropdown").val();
    console.log(id);
    $.ajax(`/api/movies/${id}`, {
        type: "PUT",
        dataType: "json",
        data: {
            title: $("#movieTitle").val(),
            rating: $('input[name=rating]:checked').val(),
        }
    });
});



