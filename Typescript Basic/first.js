// Basic hết
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
// Với class
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
// Với biến và hàm
var domain = "freetuts.net"; // Có thể thêm như này để specific kiểu dữ liệu
var decimal = 12, hex = 0xf00d;
var octal = 508; // Sang js sẽ thành 484
var students = ["Cuong", "Kinh"]; // or
var students2 = ["Cuong", "Kinh"];
// Kiểu tuple thực ra là 1 mảng 2 phần tử
var student = ["Cuong", 27];
// Kiểu enum
var Fruits;
(function (Fruits) {
    Fruits[Fruits["Orange"] = 12] = "Orange";
    Fruits[Fruits["Banana"] = 13] = "Banana";
    Fruits[Fruits["Mango"] = 14] = "Mango";
})(Fruits || (Fruits = {}));
; // mặc định là 0, ta có thể set bắt đầu bằng 12 như này
var a = Fruits.Orange;
alert(a);
// Kiểu any có thể là bất cứ kiểu dữ liệu gì, khi lấy data từ người dùng kb trc kiểu thì có thể dùng
var notSure = 4; // number
notSure = "Or String"; // string
// Do đó có thể kết hợp nhiều kiểu phức tạp
var list = [1, true, "free"];
// Kiểu void, null, undefined
function showMessage() {
    alert("Success!");
}
var unsable = undefined;
var u = undefined;
{
    var n = null;
}
//các kiểu khai báo đều bị giới hạn trong blockscoped của nó, k dùng được ngoài phạm vi đó
var myAdd = function (x, y, z) {
    if (x === void 0) { x = 2; }
    if (y === void 0) { y = 2; }
    return x + y;
}; // z có thể có hoặc k
function test(x) {
    var paramsConLai = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        paramsConLai[_i - 1] = arguments[_i];
    }
} // k khai báo type thì mặc định là kiểu any => nên nói rõ type
test("Hello", "Hi", "Ba", "Bon");
function speak(food) {
    console.log("Our " + food.name + " has " + food.calories + " calories.");
}
var ice_cream = {
    name: "cookies",
    calories: 250
};
speak(ice_cream);
//Generics trong TS cho phép 1 hàm có thể dùng tham số nhiều kiểu khác nhau
function genericFunc(argument) {
    var arrayOfT = []; // Create empty array of type T.
    arrayOfT.push(argument); // Push, now arrayOfT = [argument].
    return arrayOfT;
}
var arrayFromString = genericFunc("beep");
console.log(arrayFromString[0]); // "beep"
console.log(typeof arrayFromString[0]); // String
//có thể dùng như trên or k cần vì hệ thống sẽ tự xác định
var arrayFromNumber = genericFunc(42);
console.log(arrayFromNumber[0]); // 42
console.log(typeof arrayFromNumber[0]); // number 
// function generic phức tạp hơn ở dạng arrow function
// function that returns a tuple
var getTuple = function (a, b) {
    return [a, b];
};
// getTuple có kiểu là <T, U>( a: T, b: U ) => [ T, U ]
// và có giá trị là ( a, b ) => {return [ a, b ];}
var stringArray = getTuple('hello', 10);
console.log(stringArray);
function testInterface(b) {
    console.log(b);
}
testInterface({ a: "hello", b: 10 });
// Kiểu promise 
var functionA = new Promise(function (resolve, reject) {
    //tức là string cuối phải trả ra string. Ở đây là Success!
    resolve("Success!");
});
functionA.then(console.log);
//ở đây nó báo lỗi nhưng vẫn chạy ra đúng ý ta, bởi vì ta làm k sai mà là phiến bản này có vấn đề
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
// khi dùng async function thì type cx phải dùng là Promise<type trả về> với cái bên trong là giá trị ta return
// giống như Promise. Thực tế ta chỉ return ra 1 object bth nhưng cứ là async là phải nhét vào Promise<>
function testAsync() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, {
                    a: 10
                }];
        });
    });
}
