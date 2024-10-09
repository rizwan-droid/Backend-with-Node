// function getPhotos() {
//   setTimeout(() => {
//     console.log("getting photos");
//   }, 2000);
// }

// function getMorePhotos() {
//   setTimeout(() => {
//     console.log("thodi aur photos");
//   }, 3000);
// }

// getPhotos();
// getMorePhotos();


/*
dice server - connect
dice server - data lenge course
ennroll karenge course
 */

function connectToDiceServer(cbfnc){
  console.log('connect to dice server');
  setTimeout(() => {
    console.log('connected to dice server');
    cbfnc();
  }, 2000);
  
}

function fetchDiceCourses(){
  console.log('fetching dice courses');
  
}
connectToDiceServer(function(){console.log('fetching dice courses');
});
fetchDiceCourses();
