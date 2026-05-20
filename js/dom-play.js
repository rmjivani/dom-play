/*


   Create an app that on click actors lines are highlighted


   With a single click, highlight (bold or otherwise) all lines for a specific actor in a play
   Un-highlight (normal or otherwise) all lines from all other actors in the play
  
   The function(s) created to do the work must accommodate any number of actors, and any number of additional lines added to the page
  
   HTML "hooks" may be added to the page for proper operation


*/


const spans = document.querySelectorAll("#play span");

console.log(spans);

for(const mySpan of spans) {
    mySpan.style.backgroundColor = "yellow";
    let actor = mySpan.dataset.actor;
    alert(actor);

}