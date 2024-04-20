var form = document.getElementById('form')
form.addEventListener('submit',function(event){
    event.preventDefault()
    var input = document.getElementById('passage').value
    // console.log(input)
    // console.log(input.length)
    if(input.trim() === ''){
        document.getElementById('output').innerText = "Submit Text"
    }
    else if(input.length>=1024){
        document.getElementById('output').innerText = "Submit Text"
        document.getElementById("passage").value = ""
        document.getElementById("holder").style.display = "block"
    }
    else{
         query({"inputs": input}).then((response) => {document.getElementById('output').innerText = (JSON.stringify(response[0][0]["label"])).substring(1,JSON.stringify(response[0][0]["label"]).length-1)});
    }

})

async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/namebobb/my_awesome_model",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}

// query({"inputs": "I like you. I love you"}).then((response) => {
// 	console.log(JSON.stringify(response[0][0]["label"]));
// });


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
