var quiz_no; //現在のクイズ#
var question; //質問一覧
var answer; //答え一覧
var hint; //ヒント一覧
var btn_submit; //送信ボタン
var TOTALQ; //総質問数
var correct; //正しい答え
var btn_hint; //ヒントボタン
var flag; //フラグ
var discomfort_order; //不快因子
var discomfort_hint_num; //不快因子の含まれるヒント#

//範囲内乱数の生成
const randRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

var initQuestion = function () {
  question = [
    "",
    "津田梅子が最初にアメリカに渡ったのは西暦何年？",
    "津田塾大学の前身となるのは何塾？",
    "津田塾大学の初代学長(2代目塾長)は誰？",
    "小平キャンパス本館(ハーツホン・ホール)の最も早い教室番号は？",
    "小平キャンパス７号館が竣工した年は",
    "本館を設計したのは誰？",
    "津田塾大学のカレッジ・ソングは？",
    "津田梅子の最後の言葉と言われているのは？",
    "小平キャンパス本館は東京都の何に指定されている？",
    "津田塾大学発祥の地の現在の最寄り駅は？"
  ];
  answer = [
    "",
    "1871",
    "女子英学塾",
    "星野あい",
    "H001",
    "2010",
    "佐藤功一",
    "Alma Mater",
    "Storm last night",
    "東京都選定歴史的建造物",
    "半蔵門駅"
  ]
  hint = [
    [
      "帰国したのは1882年",
      "満6歳だった",
      "帰国命令後滞在を延長している",
      "津田梅子の誕生日は1864年12月31日"
    ],
    [
      "女子教育を志向していた",
      "国際関係論を学べた",
      "英語教育に力をいれていた",
      "津田塾大学になる前に「津田英学塾」「津田塾専門学校」と改称したこともある"
    ],
    [
      "1929年就任",
      "1929年就任",
      "2度の留学経験がある",
      "小平キャンパスの図書館の名前"
    ],
    [
      "各階の数字が百の位",
      "同じ階には教室が4室",
      "通常は立ち入り禁止",
      "通常は立ち入り禁止"
    ],
    [
      "3号館より新しく、千駄ヶ谷キャンパスより古い",
      "3号館より新しく、千駄ヶ谷キャンパスより古い",
      "津田梅子賞創設と同じ年",
      "創立110周年を記念して建てられた"
    ],
    [
      "男性",
      "男性",
      "大学関連の建築作品は233件",
      "代表作は、早稲田大学大隈記念講堂や武蔵野大学大講堂など"
    ],
    [
      "入学式や卒業式で歌われる",
      "ハーツホンが歌詞をつけた",
      "ハーツホンが歌詞をつけた",
      "ラテン語で「恵みの母」の意味"
    ],
    [
      "英語",
      "英語",
      "日記に書き遺した",
      "意味は「昨夜、嵐」"
    ],
    [
      "東京都景観条例に基づいて選定される",
      "東京都景観条例に基づいて選定される",
      "2001年2月に選定",
      "東京都指定文化財とは別"
    ],
    [
      "皇居の門の一つと同じ名称",
      "地下鉄の駅",
      "洋菓子店の壁にプレートが埋め込まれている",
      "洋菓子店の壁にプレートが埋め込まれている"
    ],
    [
      "d",
      "",
      "",
      ""
    ]
  ]
}
var setTitle = function () {
  var title = document.getElementById("quiz_title");
  if (quiz_no == TOTALQ + 1) {
    title.innerHTML = "結果";
    return;
  }
  title.innerHTML = "Quiz" + quiz_no;
}

var setQuestion = function () {
  var msg = document.getElementById("question");
  if (quiz_no == TOTALQ + 1) {
    return;
  }
  msg.innerHTML = question[quiz_no];
}

var first_factor = function () {
  init_gauge();
  var percentage = document.getElementById("gauge-value");
  $('#loader-bg').css('display', 'block').delay(14000).fadeOut(800).queue(function () {
    $('#skull').css('display', 'block');
  });
}

var second_factor = function () {
  // for(var i = 0; i < btn_hint.length; i++) {
  //    btn_hint[i].setAttribute("id","small");
  // }
  btn_hint[1].setAttribute("id", "small");
}

function escape(btn_no) {
  if (flag[btn_no] == 1) {
    btn_hint[btn_no].style.top = "150px";
  }
  if (flag[btn_no] == 2) {
    btn_hint[btn_no].style.top = "50px";
  }
  if (flag[btn_no] == 3) {
    btn_hint[btn_no].style.top = "0px";
  }
  if (flag[btn_no] == 4) {
    btn_hint[btn_no].style.top = "200px";
  }
  flag[btn_no] = flag[btn_no] + 1;
}

var third_factor = function () {
  // for(var i = 0; i < btn_hint.length; i++) {
  //   btn_hint[i].setAttribute("onMouseover","escape("+i+")");
  // }
  btn_hint[0].setAttribute("onMouseover", "escape(" + 0 + ")");
}

//バイブレーション
var vflag = 1;
function vibrate() {
    //バイブレーション後にダミーページへ。
    //todo メソッドを分ける
    //navigator.vibrate(5000);
    if(vflag == 1) {//1回目のタップ
        navigator.vibrate(1000);
    }
    if(vflag == 2) {//2回目
        navigator.vibrate(3000);
    }
    if(vflag == 3) {//3回目
        navigator.vibrate(5000);
    }
    if(vflag >= 4) {//4回目以降
        $('#quiz-main').css('display', 'none');
        $('#title_q').css('display', 'none');
        $('#skull').css('display', 'block');
        //vflag = 0;
    }
    vflag = vflag + 1;
}

var fourth_factor = function () {
  // todo
  //navigator.vibrate(2000);
    
  btn_hint[0].setAttribute("onMouseover", "vibrate()");//
}

var aflag = 1;
var fifth_factor = function () {
    if(aflag == 1) {//1回目のタップ
        location.href = "twitter://timeline";
    }
    if(aflag == 2) {//2回目
        location.href = "twitter://timeline";
    }
    if(aflag == 3) {//3回目
        location.href = "twitter://timeline";
    }
    if(aflag >= 4) {//4回目
        $('#quiz-main').css('display', 'none');
        $('#title_q').css('display', 'none');
        $('#skull').css('display', 'block');
        //aflag = 0;
    }
    aflag = aflag + 1;
    
  //location.href = "twitter://timeline";
  //todo
  //https://github.com/apache/cordova-plugin-inappbrowser#readme
  //https://qiita.com/keeey/items/d81b3c64dc5c1fcc1c9b
  //location.href = "https://en.wikipedia.org/wiki/Tsuda_University";
  // var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
  // ref.show();
}

var resetAll = function () {
  document.ansform.answer.value = "";
  for (var i = 0; i < btn_hint.length; i++) {
    btn_hint[i].removeAttribute("id");
  }
  for (var i = 0; i < btn_hint.length; i++) {
    btn_hint[i].removeAttribute("onMouseover");
  }
  for (var i = 0; i < btn_hint.length; i++) {
    btn_hint[i].style.top = "0px";
  }
}

var submit_answer = function () {
  var a = document.ansform.answer.value;
  var result = "不正解！";
  if (a == answer[quiz_no]) {
    result = "正解！";
    correct += 1;
  }
  flag = [1, 1, 1, 1]; //追加
    vflag = 1; //追加
    aflag = 1; //追加

  $('#quiz-main').css('display', 'none');
  var msg = document.getElementById("correctans");
  msg.innerHTML = result;
  $('#correct_link').css('display', 'block');
  $('#back_link').css('display', 'none');
  $('#correct').css('display', 'block');
}
var end = function () {
  var msg = document.getElementById("correctans");
  msg.innerHTML = (quiz_no - 1) + "問中" + correct + "問正解！";
  var link = document.getElementById("back_link");
  $('#correct_link').css('display', 'none');
  $('#back_link').css('display', 'block');
}
var correct_ans = function () {
  quiz_no = quiz_no + 1;
  if (quiz_no == TOTALQ + 1) {
    end();
    return;
  }
  setDiscomfort();
  setTitle();
  setQuestion();
  if(discomfort_order[quiz_no] == 4){
    fourth_factor();
  }
  $('#quiz-main').css('display', 'block');
  $('#correct').css('display', 'none');
}

var setDiscomfort = function(){
  //todo DRY原則
    if (discomfort_order[quiz_no] == 2) {
    resetAll();
    second_factor();
  } else if (discomfort_order[quiz_no] == 3) {
    resetAll();
    third_factor();
  } else {
    resetAll();
  }
}

var hint1 = function () {
  
    if (discomfort_order[quiz_no] == 3) {
    $('#quiz-main').css('display', 'none');
    $('#title_q').css('display', 'none');
    $('#skull').css('display', 'block');
    return;
    }
    
    if (discomfort_order[quiz_no] == 4) { //4を追加
        $('#quiz-main').css('display', 'block');
        $('#title_q').css('display', 'block');
        $('#skull').css('display', 'none');
        return;
    }
  
  $('#quiz-main').css('display', 'none');
  var msg = document.getElementById("hint-contnets");
  msg.innerHTML = hint[quiz_no - 1][0];
  $('#hint-main').css('display', 'block');
    
}
var hint2 = function () {
  $('#quiz-main').css('display', 'none');
  if (discomfort_order[quiz_no]  == 2) {
    $('#title_q').css('display', 'none');
    $('#skull').css('display', 'block');
    return;
  }
  var msg = document.getElementById("hint-contnets");
  msg.innerHTML = hint[quiz_no - 1][1];
  $('#hint-main').css('display', 'block');
}
var hint3 = function () {
  $('#quiz-main').css('display', 'none');
  if (discomfort_order[quiz_no]  == 1) {
    $('#title_q').css('display', 'none');
    first_factor();
    return;
  }
  var msg = document.getElementById("hint-contnets");
  msg.innerHTML = hint[quiz_no - 1][2];
  $('#hint-main').css('display', 'block');
}
var hint4 = function () {
  if (discomfort_order[quiz_no]  == 5) { //4から5に修正
    fifth_factor();
    return;
  }
  $('#quiz-main').css('display', 'none');
  var msg = document.getElementById("hint-contnets");
  msg.innerHTML = hint[quiz_no - 1][3];
  $('#hint-main').css('display', 'block');
}

var btn_quiz = function () {
  $('#quiz-main').css('display', 'block');
  $('#hint-main').css('display', 'none');
  $('#loader-bg').css('display', 'none');
  $('#skull').css('display', 'none');
  $('#correct').css('display', 'none');
}

var back_to_quiz = function () {
  $('#title_q').css('display', 'block');
  btn_quiz();
}

var init_gauge = function () {
  var opts = {
    angle: 0.35,
    lineWidth: 0.1,
    radiusScale: 1,
    pointer: {
      length: 0.6,
      strokeWidth: 0.035,
      color: '#000000'
    },
    limitMax: false,
    limitMin: false,
    colorStart: '#6F6EA0',
    colorStop: '#00bfff',
    strokeColor: '#EEEEEE',
    generateGradient: true,
    highDpiSupport: true,
  };
  var target = document.getElementById('gauge_canvas');
  var gauge = new Donut(target);
  gauge.setOptions(opts);
  gauge.maxValue = 100;
  gauge.setMinValue(0);
  gauge.animationSpeed = 150;
  gauge.set(100);
  gauge.setTextField(document.getElementById("gauge-value"));
}

//不快因子の順番
var make_discomfort_order = function () {
  discomfort_order = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]
  for (var i = discomfort_order.length - 1; i > 0; i--) {
    var r = Math.floor(Math.random() * (i + 1));
    var tmp = discomfort_order[i];
    discomfort_order[i] = discomfort_order[r];
    discomfort_order[r] = tmp;
  }
  discomfort_order.unshift(-1);
  // 不快因子が含まれるヒントの番号生成
  discomfort_hint_num = randRange(0, 3);
}

onload = function () {
  $('#hint-main').css('display', 'none');
  $('#loader-bg').css('display', 'none');
  $('#skull').css('display', 'none');
  $('#correct').css('display', 'none');

  TOTALQ = 10;
  correct = 0;
  quiz_no = 1;
  flag = [1, 1, 1, 1];
  make_discomfort_order();
  btn_hint = document.getElementsByClassName("btn_hint");
  initQuestion();
  setTitle();
  setQuestion();
  setDiscomfort();
}

