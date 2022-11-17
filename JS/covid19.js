/*
 * 原脚本作者: smartmimi
 * 原脚本地址：https://github.com/smartmimi/conf/blob/master/surge/covid19.js
 * 由@Coldvvater修改
 * 更新日期：2022.06.30
 * 版本：1.0
 */


const read = $persistentStore.read("covid19area") ;
var list = read.split(",");
const url = "https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5";
var ala="";
if (!read){
  $done({
   title: "新冠疫情查询",
   style: "error",
   content: "请在boxjs中完善信息"
  })
};
function nowtime(){
 let now = new Date();
 let hour = now.getHours();
 let minutes = now.getMinutes();
 let hour_twoCode = hour > 9 ? hour : "0" + hour;
 let minutes_twoCode = minutes > 9 ? minutes : "0" + minutes;
 let time = hour_twoCode+":"+minutes_twoCode;
 return time
}
function num(location, result) {
  var loc = location;
  var resu = result;
  var loc_new = new RegExp(loc + "[\\s\\S]*?confirm[\\s\\S]{3}(\\d+)");
  var loc_now = new RegExp(loc + "[\\s\\S]*?nowConfirm[\\s\\S]{3}(\\d+)");
  var loc_wzz = new RegExp(loc + "[\\s\\S]*?wzz[\\s\\S]{3}(\\d+)");
  var loc_update = new RegExp(loc + "[\\s\\S]*?isUpdated[\\s\\S]{3}(\\b(true|false)\\b)");
  let loc_new_res = loc_new.exec(resu);
  let loc_now_res = loc_now.exec(resu);
  let loc_wzz_res = loc_wzz.exec(resu);
  let loc_update_res = loc_update.exec(resu);
  if (loc_new_res) {
    //console.log("已获取" + loc + "的信息");
    ala = ala+update_icon(loc_update_res[1])+loc+ToDBC(loc_new_res[1].padStart(5," "))+"|"+ToDBC(loc_now_res[1].padStart(6," "))+"\n";
      // 无症状+"|"+ToDBC(loc_wzz_res[1].padStart(6," "));
  } else {
    //console.log("获取" + loc + "的信息失败");
    ala = ala + loc + ":   查无数据\n";
  }
};
$httpClient.get(url, function(error, response, data){
  let res = data;
  for (var i = 0; i < list.length; i++) {
    num(list[i], res);
    if (i == list.length - 1) {
     $done({
       title: "疫情查询:"+ToDBC("  ")+"新增|现存"+ToDBC("  ")+nowtime(),
       content: ala.replace(/\n$/, ""),
       icon: "heart.circle",
       backgroundColor: '#18CDCD',
     });
    }
  }
});
function ToDBC(txtstring) {
    var tmp = "";
    for (var i = 0; i < txtstring.length; i++) {
        if (txtstring.charCodeAt(i) == 32) {
            tmp = tmp + String.fromCharCode(12288);
        }
        else if (txtstring.charCodeAt(i) < 127) {
            tmp = tmp + String.fromCharCode(txtstring.charCodeAt(i) + 65248);
        }
    }
    return tmp;
}
function update_icon(status){
  if(status== "true"){
    return '\u2714';
  } else if(status== "false"){
      return '\u3030';
    } else{
      return '\u2716';
     }
}
