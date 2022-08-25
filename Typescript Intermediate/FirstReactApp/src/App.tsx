import React, { useState } from 'react'
import './App.css';

// Class component => kqtr
interface StateButton {
  stateLight: boolean,
}
interface PropsButton {
  stateLight: boolean,
}
// Phải ghi rõ ràng extends React.Component <type của props, type của state>
class SwitchButton extends React.Component <PropsButton,StateButton> {
  constructor(props: PropsButton) {
    super(props);
    this.state = {
      stateLight: false,
    }
  }
  render() {
    return(
    <p>The light is {this.state.stateLight ? "ON" : "OFF"}</p>
    );
  }
}
// Type nào k qtr có truyền vào {} trống là được 
class SwitchButton2 extends React.Component <PropsButton,{}> {
  render() {
    return(
      <p>The light is {this.props.stateLight ? "ON" : "OFF"}</p>
    );
  }
}

// Để sử dụng state buộc khai báo type bằng interface
interface States {
  name: string
  age: number
}
// Để sử dụng props
interface Props {
  isStudent: boolean
  test?: string
}

// Phải khai báo type cho props ở ngay React.FC<>
const Test: React.FC<Props> = (props) => {
  return(
    <div>
      {props.isStudent.toString()}
    </div>
  )
}

// Functional component
const App: React.FC = (props) => {
  const [user, setUser] = useState<States>({ name: 'Nguyễn Văn A', age: 27 })

  return (
    <div>
      <SwitchButton2 stateLight={false}/>
      <div>{user.name}</div>
      <Test isStudent={true}/>
    </div>
  );
}
export default App;

// Type hàm trong interface
interface Button {
  text: string
  onClick: () => void
}
const buttonLogin: Button = {
  text: 'login',
  onClick: () => {
    console.log('bấm login')
  },
}

// Merge 2 interface cùng tên vào, đỡ phải kế thừa 1 cái tên mới cho 1 interface mới
interface Box {
  height: number;
  width: number;
}
interface Box {
  readonly scale: number;
}
let box: Box = { height: 5, width: 6, scale: 10 }; // k sửa được scale của box nx
console.log(box);