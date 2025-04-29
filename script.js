
function submitCaptcha() {
    const answer = document.getElementById("answer").value;
    fetch("https://taskbajibackend.onrender.com/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answer })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("result").innerText = data.message || "Done";
    })
    .catch(error => console.error("Error:", error));
}
