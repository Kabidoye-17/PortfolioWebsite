

function scroll(buttonPressed){
  if (buttonPressed==="aboutmebutton" || buttonPressed==="aboutRec"){
    const element = document.getElementById("divider1");
    element.scrollIntoView({behavior: "smooth"});
  } else if (buttonPressed==="projectsbutton" || buttonPressed==="projectRec"){
    const element = document.getElementById("divider2");
    element.scrollIntoView({behavior: "smooth"});
  } else if (buttonPressed === "contactmebutton" || buttonPressed==="contactRec"){
    const element = document.getElementById("divider3");
    element.scrollIntoView({behavior: "smooth"});
  }
}

const maindiv = document.querySelector(".landing");
maindiv.addEventListener("click", function (event) {
  const buttonPressed = event.target.id;
  scroll(buttonPressed);
})

