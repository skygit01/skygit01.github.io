// function to show property details (placeholder)
function showdetails(propertyname) {
  alert(`you clicked on ${propertyname}. more details coming soon!`);
}

// Handle form submission
document. getElementbyID("contactform"). addeventlistener("submit", function(event) {
evennt.preventdefault(); // prevent page reload
const name = 
document. getelementbyid("name"). value;
const email = 
document.getelementbyid("email"). value;
const mrssage = 
document.getelementbyid("message"). value;

console.log ("form submitted:", { name, email, message});
alert ("thank you for your message! we'll get back to you soon.");
this.reset(); //clear the form
});