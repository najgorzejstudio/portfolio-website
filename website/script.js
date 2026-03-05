window.onload = function () {
    if (localStorage.getItem("hasCodeRunBefore") === null) {
        getData()
        localStorage.setItem("hasCodeRunBefore", true);
    }
}

async function getData() {
    const response = await fetch("https://616wetav3j.execute-api.eu-central-1.amazonaws.com/prod/counter-path")
    if (!response.ok) {
        console.log("error")
        return
    }

    const data = await response.json()
    

    console.log(data)


    document.getElementById("counter").innerHTML = "This website was viewed: " + data["visits"] + "times"
}

