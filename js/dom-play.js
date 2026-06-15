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
    //mySpan.style.backgroundColor = "yellow";
    let actor = mySpan.dataset.actor;
    mySpan.addEventListener("click",function(ev){

        // load function with current actor
            highlightActor(actor);
    });
}

function highlightActor(actor) {

        // loop all spans
        for(const mySpan of spans) {
            //  highlight current actor
            if (actor == mySpan.dataset.actor) {
                mySpan.style.backgroundColor = "yellow";
            } else {
                mySpan.style.backgroundColor = "white";
            }
        }

}


function highlight(el) {
   let currentBg = el.style.backgroundColor;
  
   // Catch the empty string state on the first click
   if (currentBg === "" || currentBg === "white") {
       el.style.backgroundColor = "yellow";
   } else {
       el.style.backgroundColor = "white";
   }
}

