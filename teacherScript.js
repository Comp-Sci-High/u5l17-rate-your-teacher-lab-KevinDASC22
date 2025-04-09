// Add an event listener to the form that upon submits creates a new teacher
// When the teacher is created redirect to the teachers page
const createForm= document.querySelector("form")

createForm.addEventListener("submit", async(e)=>{
    e.preventDefault()

const teacherin = new FormData("form")
const reqBody = Object.fromEntries(teacherin)
const response = await fetch("/add/teacher" , {

})
})