// modal
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// modal end


//minus plus function
const plus = document.querySelector(".plus");
minus = document.querySelector(".minus");
number = document.querySelector(".number");

let a = 1;

plus.addEventListener("click",()=>{
  a++;
  a = (a < 10) ? + a : a;
  number.innerText = a;
  console.log(a);
});


minus.addEventListener("click",()=>{
  if(a > 1){
      a--;
      a = (a < 10) ? + a : a;
  number.innerText = a;
  }
});
//minus plus function end


// navbar search js
searchForm = document.querySelector('.search-form');

document.querySelector('#search-btnnnnn').onclick = () =>{
  searchForm.classList.toggle('active');
}
// navbar search js end

//Bottom to top arrow
const toTop = document.querySelector(".to-top")
window.addEventListener("scroll", ()=>{
  if(window.pageYOffset > 100){
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})
//Bottom to top arrow end