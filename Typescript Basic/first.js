var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.Name = firstName + "  " + lastName;
    }
    Customer.prototype.GetName = function () {
        return "Hello, " + this.Name;
    };
    return Customer;
}());
var cust = new Customer("Jimi", "Scott");
var domain = "freetuts.net"; //c?? th??? th??m nh?? n??y ????? specific ki???u d??? li???u
var decimal = 12, hex = 0xf00d;
var octal = 508; //sang js s??? th??nh 484
var students = ["Cuong", "Kinh"]; //or
var students2 = ["Cuong", "Kinh"];
//Ki???u tuple th???c ra l?? 1 m???ng 2 ph???n t???
var student = ["Cuong", 27];
//Ki???u enum
var Fruits;
(function (Fruits) {
    Fruits[Fruits["Orange"] = 12] = "Orange";
    Fruits[Fruits["Banana"] = 13] = "Banana";
    Fruits[Fruits["Mango"] = 14] = "Mango";
})(Fruits || (Fruits = {}));
; // m???c ?????nh l?? 0, ta c?? th??? set b???t ?????u b???ng 12 nh?? n??y
var a = Fruits.Orange;
alert(a);
//Ki???u any c?? th??? l?? b???t c??? ki???u d??? li???u g??, khi l???y data t??? ng?????i d??ng kb trc ki???u th?? c?? th??? d??ng
var notSure = 4; //number
notSure = "Or String"; //string
//c?? th??? k???t h???p nhi???u ki???u ph???c t???p
var list = [1, true, "free"];
//ki???u void, null, undefined
function showMessage() {
    alert("Success!");
}
var unsable = undefined;
var u = undefined;
{
    var n = null;
}
//c??c ki???u khai b??o ?????u b??? gi???i h???n trong blockscoped c???a n??, k d??ng ???????c ngo??i ph???m vi ????
var myAdd = function (x, y, z) {
    if (x === void 0) { x = 2; }
    if (y === void 0) { y = 2; }
    return x + y;
}; //z c?? th??? c?? ho???c k
function test(x) {
    var paramsConLai = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        paramsConLai[_i - 1] = arguments[_i];
    }
}
test("Hello", "Hi", "Ba", "Bon");
function speak(food) {
    console.log("Our " + food.name + " has " + food.calories + " calories.");
}
var ice_cream = {
    name: "cookies",
    calories: 250
};
speak(ice_cream);
//Generics trong TS cho ph??p 1 h??m c?? th??? d??ng tham s??? nhi???u ki???u kh??c nhau
function genericFunc(argument) {
    var arrayOfT = []; // Create empty array of type T.
    arrayOfT.push(argument); // Push, now arrayOfT = [argument].
    return arrayOfT;
}
var arrayFromString = genericFunc("beep");
console.log(arrayFromString[0]); // "beep"
console.log(typeof arrayFromString[0]); // String
//c?? th??? d??ng nh?? tr??n or k c???n v?? h??? th???ng s??? t??? x??c ?????nh
var arrayFromNumber = genericFunc(42);
console.log(arrayFromNumber[0]); // 42
console.log(typeof arrayFromNumber[0]); // number 
//function generic ph???c t???p h??n
// function that returns a tuple
var getTuple = function (a, b) {
    return [a, b];
};
// getTuple c?? ki???u l?? <T, U>( a: T, b: U ) => [ T, U ]
//v?? c?? gi?? tr??? l?? ( a, b ) => {return [ a, b ];}
var stringArray = getTuple('hello', 10);
console.log(stringArray);
function testInterface(b) {
    console.log(b);
}
testInterface({ a: "hello", b: 10 });
var functionA = new Promise(function (resolve, reject) {
    //t???c l?? string cu???i ph???i tr??? ra string. ??? ????y l?? Success!
    resolve("Success!");
});
functionA.then(console.log);
//??? ????y n?? b??o l???i nh??ng v???n ch???y ra ????ng ?? ta, b???i v?? ta l??m k sai m?? l?? phi???n b???n n??y c?? v???n ?????
function functionB(t) {
    return new Promise(function (resolve, reject) {
        resolve(t);
    });
}
functionB(10).then(console.log);
var Player = /** @class */ (function () {
    function Player(id, name, dob) {
        this.id = id;
        this.name = name;
        this.dob = dob;
    }
    Player.prototype.GetName = function () {
        var player = new Player("Hello", "World", '');
        return new Promise(function (resolve, reject) {
            resolve(player);
        });
    };
    ;
    Player.prototype.hello = function () { };
    ;
    return Player;
}());
//khi d??ng ??syn
function testAsync() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, {
                    a: 10
                }];
        });
    });
}
