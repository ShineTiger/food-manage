import React, {useState, useRef} from "react"
import ManageEditor from "./ManageEditor";
import ManageList from "./ManageList";
import './App.css';

// const dummylist = [
//   {id:1,
//     food:"치킨",
//     kcal:300,
//     date:new Date().getTime()
//   },
//   {id:2,
//     food:"떡볶이",
//     kcal:200,
//     date:new Date().getTime()
//   },
//   {id:3,
//     food:"씨리얼",
//     kcal:100,
//     date:new Date().getTime()
//   },
// ]

const App = () => {
  //데이터를 대응하는 state
  const [data,setData] = useState([]);

  const dataId = useRef(0);
  
  const onCreate = (food, kcal, memo) => {
    const date = new Date().getTime();
    const newItem = {
      id: dataId.current,
      food,
      kcal,
      memo,
      date
    }
    dataId.current += 1;
    setData([newItem, ...data])
  }

  return(
    <div className="App">
      <ManageEditor onCreate={onCreate}/>
      <ManageList manageList={data}  />
    </div>
  );
}

export default App;
