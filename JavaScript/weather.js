$httpClient.get("https://devapi.qweather.com/v7/weather/now?key=bf994b2d5cc6446184697aea4af6944d", function (error, response, data) {
    $done({
        title: "当前天气",
        content: data,
        backgroundColor: "#318BD5",
        icon: "cloud.sun.rain.fill.system",
    })
})
