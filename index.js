var form = document.getElementById('form')
form.addEventListener('submit',function(event){
    var input = document.getElementById('passage').value
    console.log(input)
    window.alert(input)
})