//オブジェクトの定義
const obj = {
    first_name:'mafia',             //プロパティ
    last_name: 'code',
    printFullName: function(){      //メソッド
        console.log('hello');
    }
}


//クラス宣言例その１
class MyOjb {
    constructor() {
        this.first_name = 'mafia';     //このthisは生成されるオブジェクト(この場合はobj2を参照する)
        this.last_name = 'code';
    }

    printFullName() {
        console.log('hello');
    }
}

const obj2 = new MyOjb();       //MyObjのインスタンス(オブジェクト)を生成、obj2に代入
obj.printFullName();
obj2.printFullName();       //出力結果は同じhello


//クラス宣言例その２
class fooclass{
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    calc() {
        return this.x + this.y
    }
}

const foo = new fooclass(5, 6);   //constractor(x, y)に5,6を代入する
const foo2 = foo.calc();
console.log(foo2);                //5+6で11が出力