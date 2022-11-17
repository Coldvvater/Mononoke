/*
 * 原脚本作者: smartmimi
 * 原脚本地址：https://github.com/smartmimi/conf/blob/master/surge/weekly_notes.js
 * 由@Coldvvater修改
 * 更新日期：2022.06.30
 * 版本：1.0
 */

const weekly_notes_boxjs_title = $persistentStore.read("weekly_notes_title");
var tnow = new Date();
var tnoww = tnow.getDay();
const weekly_notes_boxjs = $persistentStore.read(`weekly_notes_${tnoww}`);
$done({
    title: "周"+`${tnoww==0?"日":tnoww}`+ weekly_notes_boxjs_title,
    content: weekly_notes_boxjs,
    icon: "greetingcard",
    backgroundColor: '#318BD5',
})
  
  
