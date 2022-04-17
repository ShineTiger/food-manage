import { useState } from "react";

const ManageEditor = ({onCreate}) => {
    /*const [food, setFood] = useState("");
    const [memo, setMemo] = useState("")*/
//이벤트에 대응하는 state
    const [state,setState]=useState({
        food:"식사",       
        kcal:0,
        memo:"",
        date:""
    });

    const handleChangeState = (e) => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = () => {
        onCreate(state.food, state.kcal,state.memo, state.date);
        setState({
            food:"식사",       
          kcal:0,
         memo:"",
        date:""
        })
    }
    
    return(
        <div className="ManageEditor">
            <h2>오늘의 식단</h2>
                          
                <div className="Manage-inner">
                    <select name="food" value={state.food} onChange={handleChangeState}>
                        <option value={"식사"}>식사</option>
                        <option value={"치킨"}>치킨</option>
                        <option value={"피자"}>피자</option>
                    </select>
                    <input name="kcal" onChange={handleChangeState} type="number" placeholder="0 kcal" value={state.kcal} required ></input>
                    <input name="memo" onChange={handleChangeState} placeholder="메모" value={state.memo}></input>
                    <p>시간</p>        
                    <button onClick={handleSubmit}>확인</button>            
                </div>
                
            
        </div>
    );
}

export default ManageEditor;