// Add your code here
function submitData(userName, userEmail) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            name: userName, 
            email: userEmail,
        }),
    })
    .then(function (res) {
       return res.json()
    })
    .then(function (object) {
        console.log(document.body.textContent = object.id)
    })
    .catch(error => {
        alert("This is not a drill, you did something wrong");
        console.log(document.body.textContent = error.message);
    })
}