window.onload = function () {
    getData()
}

async function getData() {
    console.log("fetching")
    const response = await fetch("https://616wetav3j.execute-api.eu-central-1.amazonaws.com/prod/counter-path", {method: "POST"})
    if (!response.ok) {
        console.log("error")
        return
    }

    const data = await response.json()
    

    console.log(data)


    document.getElementById("counter").innerHTML = "This website was viewed: " + data["visits"] + " times!"
}

