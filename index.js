var form = document.getElementById('form')
form.addEventListener('submit',function(event){
    event.preventDefault()
    var input = document.getElementById('passage').value
    console.log(input)
    if(input.trim() === ''){
        document.getElementById('output').innerText = "Submit Text"
    }
    else{
        document.getElementById('output').innerText = input
    }

})
function resetForm() {
    document.getElementById("passage").value = ""
    document.getElementById("output").innerText = "Submit Text"
    document.getElementById("holder").style.display = "block"
}
function rem() {
    var holder = document.getElementById("holder");
    holder.style.display = "none";
}
function back() {
    var holder = document.getElementById("holder");
    var s = document.getElementById("passage").value
    if(s.trim() === ''){
        holder.style.display = "block";
    }
}
