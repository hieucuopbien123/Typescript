// Basic hết

// Với class
class Customer {  
    Name : string;  
    constructor (firstName: string, lastName: string)  
    {  
        this.Name = firstName + "  " + lastName;  
    }  
    GetName() : string 
    {  
        return "Hello, " + this.Name;  
    }  
}  
let cust = new Customer("Jimi","Scott");

// Với biến và hàm
var domain : string = "freetuts.net"; // Có thể thêm như này để specific kiểu dữ liệu
var decimal : number = 12, hex : number = 0xf00d;
var octal : number = 0o774; // Sang js sẽ thành 484

var students : string[] = ["Cuong", "Kinh"]; // or
var students2 : Array<string> = ["Cuong", "Kinh"];

// Kiểu tuple thực ra là 1 mảng 2 phần tử
let student: [string, number] = ["Cuong", 27];

// Kiểu enum
enum Fruits {Orange = 12, Banana, Mango}; // mặc định là 0, ta có thể set bắt đầu bằng 12 như này
let a: Fruits = Fruits.Orange;
alert(a);

// Kiểu any có thể là bất cứ kiểu dữ liệu gì, khi lấy data từ người dùng kb trc kiểu thì có thể dùng
let notSure: any = 4; // number
notSure = "Or String"; // string
// Do đó có thể kết hợp nhiều kiểu phức tạp
let list: any[] = [1, true, "free"];

// Kiểu void, null, undefined
function showMessage() : void{//specific kiểu cho hám
    alert("Success!");
}
let unsable: void = undefined
let u: undefined = undefined
{
    const n: null = null;
}
//các kiểu khai báo đều bị giới hạn trong blockscoped của nó, k dùng được ngoài phạm vi đó

var myAdd = function(x: number = 2, y = 2, z ?: number): number { return x+y; }; // z có thể có hoặc k
function test(x, ...paramsConLai: string[]){ } // k khai báo type thì mặc định là kiểu any => nên nói rõ type
test("Hello", "Hi", "Ba", "Bon");

interface Food {
    name: string;
    calories: number;
}
function speak(food: Food): void{
    console.log("Our " + food.name + " has " + food.calories + " calories.");
}
var ice_cream = { // phải đúng interface
    name: "cookies", 
    calories: 250
}
speak(ice_cream);

//Generics trong TS cho phép 1 hàm có thể dùng tham số nhiều kiểu khác nhau
function genericFunc<T>(argument: T): T[] {    
    var arrayOfT: T[] = [];    // Create empty array of type T.
    arrayOfT.push(argument);   // Push, now arrayOfT = [argument].
    return arrayOfT;
}

var arrayFromString = genericFunc<string>("beep");
console.log(arrayFromString[0]);         // "beep"
console.log(typeof arrayFromString[0])   // String
//có thể dùng như trên or k cần vì hệ thống sẽ tự xác định
var arrayFromNumber = genericFunc(42);
console.log(arrayFromNumber[0]);         // 42
console.log(typeof arrayFromNumber[0])   // number 

// function generic phức tạp hơn ở dạng arrow function
// function that returns a tuple
let getTuple: <T, U>( a: T, b: U ) => [ T, U ] = ( a, b ) => {
    return [ a, b ];
}
// getTuple có kiểu là <T, U>( a: T, b: U ) => [ T, U ]
// và có giá trị là ( a, b ) => {return [ a, b ];}
let stringArray = getTuple<string, number>( 'hello', 10 );
console.log(stringArray);
// Vì khi ta định nghĩa biến thì luôn kèm type còn vế phải là 1 function kp 1 biến thì k cần rõ type
// Chú ý sự khác nhau: arrow function thì biến có type là 1 function. Function bth thì type của nó phải viết 
// theo GT trả về

// kế thừa interface
interface A<T> {
    a: T
}
interface B<T, H> extends A<T>{
    b: H
}
function testInterface(b: B<string, number>){
    console.log(b);
}
testInterface({a: "hello", b: 10});

// Kiểu promise 
let functionA: Promise<string> = new Promise(function (resolve, reject) {
    //tức là string cuối phải trả ra string. Ở đây là Success!
    resolve("Success!");
});
functionA.then(console.log);
//ở đây nó báo lỗi nhưng vẫn chạy ra đúng ý ta, bởi vì ta làm k sai mà là phiến bản này có vấn đề

function functionB<T>(t: T): Promise<T> {
    return new Promise<T>(function (resolve, reject) {
        resolve(t);
    });
}
functionB<number>(10).then(console.log);

interface IPlayer {
    id: String;
    name: String;
    dob: String;
    GetName(): Promise<IPlayer>;
    hello(): null;
}//dùng implements thì chỉ được định nghĩa các hàm đã có trong interface, k được thừa
class Player implements IPlayer {
    constructor(public id: String, public name: string, public dob: string) { }

    GetName(): Promise<IPlayer> {
        let player: IPlayer = new Player("Hello", "World", '');
        return new Promise<IPlayer>((resolve, reject) => {
            resolve(player);
        });
    };
    hello(): any {};
}

interface GetResponse{
    a: number
}
// khi dùng async function thì type cx phải dùng là Promise<type trả về> với cái bên trong là giá trị ta return
// giống như Promise. Thực tế ta chỉ return ra 1 object bth nhưng cứ là async là phải nhét vào Promise<>
async function testAsync(): Promise<GetResponse>{
    return {
        a: 10
    }
}