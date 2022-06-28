$httpClient.get("https://c-ssl.duitang.com/uploads/item/202004/26/20200426131631_taysd.jpg", function (error, response, data) {
    $done({
        title: "随便了",
        content: data,
        backgroundColor: "#318BD5",
        icon: "cloud.sun.rain.fill.system",
    })
})
