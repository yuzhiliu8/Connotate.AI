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
        var x= [];
        var c = 0;
        var z = 1;
        var out = "";
        query({"inputs": input}).then((response) => {
            c += response[0][0]["score"];
            x.push(response[0][0]["label"]);
            console.log(response);
            while(c<=.8 && z<=response[0].length&&x.length<3){
                if(response[0][z]["label"]!='Neutral'){
                    x.push(response[0][z]["label"]);
                    c+=response[0][z]["score"];
                }
                z++;
            }
            for(var b =0;b<x.length;b++){
                out += x[b] + ", ";
                console.log(x);
            }
            out = out.substring(0,out.length-2);
            document.getElementById('output').innerText = out;
        });
    }
})

async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/namebobb/anus-wanus-panus-ranus",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}


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
