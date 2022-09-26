if ($request.url.indexOf("&oad") != -1){
$done({response: { status: 204, headers: { "Content-Type": "multipart/byteranges"} }});
}else{
	$done({response: { status: 408 } });
}
