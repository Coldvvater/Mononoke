$httpClient.get("https://zhs.futbol/link/dhz7qdfHAmGcnMNK?mu=4&tj=1", function (error, response, data) {
    $done({
        title: "当前用量",
        content: data,
        backgroundColor: "#318BD5",
        icon: "network",
    })
})
