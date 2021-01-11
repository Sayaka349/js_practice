// function isTweetable(text) {             // 関数(isTweetableが関数名)
//     return text.length <= 140;
// }

const isTweetable = function(text) {        //関数式(関数名がなくても動く⇒匿名(無名)関数)
    return text.length <= 140;
};

console.log(isTweetable("foo"));            //true


//コールバック関数 = 引数に関数が入る
function unfollow() {
    console.log("フォローを外しました");
}

function confirmed(fn) {                     //引数fnに関数unfollow()が入る
    if (window.confirm("実行しますか？")) {
        fn();
    }
}

confirmed(unfollow);
//引数に匿名(無名)関数が入っても動く
confirmed(function() {
    console.log("ツイートをキャンセルしました");
});


//コールバック関数が匿名関数になって、匿名関数が引数(input)を持っている
function confirmed(fn) {
    const input = window.prompt("実行しますか？")
    fn(input);
}

confirmed(function(input) {
    if (input === "実行") {
        console.log("実行しました");
    }
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function hello(callback) {                  //①callbackにgetNameが渡る(関数を変数(オブジェクト)として扱える)
    console.log('hello ' + callback());     //②callback()のところでgetNameの関数が実行される
}

function getName() {
    return 'world';
}

hello(getName);                          //③hello worldが出力される

//匿名関数への書き換え
hello(function() {
    return 'world';
});
//アロー関数への書き換え
hello(() => 'world');


//callback()に引数を渡す例①
function hello(callback, lastname) {
    console.log('hello ' + callback(lastname));
}

hello(function(name) {                //lastnameがnameの引数となって渡ってくる
    return 'Taro' + name;
}, 'Yamamoto');

//callback()に引数を渡す例②
function doSomething(a, b, callback) {
    const result = callback(a, b);
    console.log(result);
}

function multiply(a, b) {
    return a * b;
}

doSomething(2, 3, multiply);