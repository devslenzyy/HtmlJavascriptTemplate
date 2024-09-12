fetch("https://tilki.dev/api/euro")
    .then((response) => response.json())
    .then((data) => {
        if (!data) return console.error("Data is not found!");

        document.getElementById("euro").innerText = `${data.euro} TL`;
    });