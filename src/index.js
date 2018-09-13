/**
 * es6 modules and imports
 */
import sayHello from './hello';

sayHello('World');

/**
 * require style imports
 */
const {getMovies} = require('./api.js');





$("#info").append("Loading...");

$.ajax('/api/movies').done(function (data) {
    $("#info").html("");


    data.forEach(function (movie) {
        $("#info").append(movie.title);


        // alert("Everything went great! Check out the server's response in the console.");
        console.log(data[0]);
        console.log(data[1]);
    });

});

// getMovies().then((movies) => {
//   $("#loading").hide();
//   console.log('Here are all the movies:');
//   movies.forEach(({title, rating, id}) => {
//     console.log(`id#${id} - ${title} - rating: ${rating}`);
//   });
// }).catch((error) => {
//   alert('Oh no! Something went wrong.\nCheck the console for details.')
//   console.log(error);
// });

