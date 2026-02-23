// Animated Counters
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
const update = () => {
const target = +counter.getAttribute('data-target');
const count = +counter.innerText;
const increment = target / 200;

if(count < target){
counter.innerText = Math.ceil(count + increment);
setTimeout(update,10);
} else {
counter.innerText = target;
}
};
update();
});

// Form Submission
document.getElementById("leadForm").addEventListener("submit",function(e){
e.preventDefault();

fetch("https://script.google.com/macros/s/AKfycbz7mrlYDoafX3WUZxoUFZDqnXsq6dpARKaQUV-iBQzMMeG3xwIvvEVI0w0FCC7IwLsW/exec",{
method:"POST",
body: JSON.stringify(Object.fromEntries(new FormData(this)))
})
.then(res=>res.json())
.then(data=>{
document.getElementById("formMessage").innerText="Submitted Successfully!";
this.reset();
})
.catch(()=> document.getElementById("formMessage").innerText="Error occurred");
});