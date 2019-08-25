var quiz_no;
var hint_no;

var initQuestion = function(){
  hint =[
    [
    "帰国したのは1882年",
    "満6歳だった",
    "帰国命令後滞在を延長している",
    "津田梅子の誕生日は1864年12月31日"
    ],
   [
    "ブリンマー大学に入学",
    "理系の学問を学んだ",
    "蛙の卵の発生に関する研究を行った",
    "生物学者であるモーガン博士の基で学んだ"
    ],
    [
    "女子教育を志向していた",
    "国際関係論を学べた",
    "英語教育に力をいれていた",
    "津田塾大学になる前に「津田英学塾」「津田塾専門学校」と改称したこともある"
    ],
     [
    "d",
    "",
    "",
    ""
    ]
  ]
}
onload = function(){
  console.log("あいうえお");
    var url = location.search.substring(1);
    var kv = url.split('=');
    quiz_no = kv[0];
    hint_no = kv[1];

    var msg = document.getElementById("hint");
    //msg.innerHTML = quiz_no+" "+hint_no;
    msg.innerHTML = "カキクケコ";
    showHint();
}