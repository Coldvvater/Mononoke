$httpClient.get("https://api.my-ip.io/ip", function (error, response, data) {
    $done({
        title: "当前 IP 地址",
        content: data,
        backgroundColor: "#EECD39",
        icon: "https:\/\/raw.githubusercontent.com\/shoujiqiyuan\/PokemonGOforQuanX\/master\/IconSet\/X001.png",
    })
})
