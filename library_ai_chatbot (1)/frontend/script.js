async function sendMessage() {
    let question = document.getElementById("input").value;

    const res = await fetch("YOUR_BACKEND_URL/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question })
    });

    let data = await res.json();

    document.getElementById("chat").innerHTML +=
        "<p><b>You:</b> " + question + "</p>" +
        "<p><b>Bot:</b> " + data.reply + "</p>";
}
