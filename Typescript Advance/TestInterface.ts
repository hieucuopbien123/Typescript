// # Type và interface
// Dùng interface / Tự động merge
interface Song {
  artistName: string;
};
interface Song {
  songName: string;
};
const song: Song = { // tự động merge 2 interface trùng tên nhé
  artistName: "Freddie",
  songName: "The Chain"
};

// Dùng type
type Name = {
  name: string
};
type Age = {
  age: number
};
// Giao, hợp
type Person = Name & Age; 
type Person2 = Name | Age;
// Tuple
type Reponse = [string, number];
// Interface k thể là 1 kiểu tuple nhưng có thể dùng type tuple bên trong interface bth
interface Response {
  value: [string, number]
}
// Dùng computed value định nghĩa type
// Ở đây làm cho Shape là 1 object có 2 thuộc tính ok
type keys = 'color' | 'name';
type Shape = {
  [key in keys]:string;
}
const Circle: Shape = {
  name:'circle',
  color:'res'
}


// # Basic / Dùng as
// Từ khóa as để convert từ kiểu này sang kiểu khác, nó rất chặt chẽ với type nhưng interface thì thoải mái 
type Tuple = [number, number];
// [1, 2, 3] as Tuple; // Type chặt chẽ và bị sai

interface ITuple { // Khi dùng interface với key toàn số là đang định nghĩa type cho mảng
  0: number;
  1: number;
}
[1, 2, 3] as ITuple; // ok
// Do convert sang interface k cần chặt chẽ nên cứ convert bth chả qt lỗi gì