// Add your code here
function submitData(userName, userEmail) {
    const userInfo = {
        method: "POST",
        
        headers:  {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        
        body: JSON.stringify({
            name: `${userName}`,
            email: `${userEmail}`
        })
    };
    return window.fetch('http://localhost:3000/users', userInfo)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        return Object.keys
       

    })
}
console.log(submitData)
submitData('Jake1', 'Jake1@yahoo.com');