window.onload = function () {
    if (localStorage.getItem("hasCodeRunBefore") === null) {
        getData()
        localStorage.setItem("hasCodeRunBefore", true);
    }
}

async function getData() {
  const response = await fetch("https://616wetav3j.execute-api.eu-central-1.amazonaws.com/prod")
  const data = await response.json()
  
}

var data = JSON.parse(this.response)

if (request.status >= 200 && request.status < 400) {
    console.log(data)
} else {
   console.log('error')
}

document.getElementById("counter").innerHTML = "This website was viewed: " + data["counter"] + "times"