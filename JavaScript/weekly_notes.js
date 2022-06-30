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
  
  
