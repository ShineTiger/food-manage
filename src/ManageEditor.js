import { useRef, useState } from "react";

const ManageEditor = () => {
    /*const [food, setFood] = useState("");
    const [memo, setMemo] = useState("")*/

    const [state,setState]=useState({
        food:["패스트푸드","간식"],
        memo:"",
        kcal:0
    });

    const handleChangeState = (e) => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }
    
    return(
        <div className="ManageEditor">
            <h2>오늘의 식단</h2>
            <form>              
                <div className="ManageEditor-inner">
                    <select>
                        <option>선택</option>
                    </select>
                    <input name="kcal" onChange={handleChangeState} type="number" placeholder="0 kcal" ></input>
                    <input name="memo" onChange={handleChangeState} placeholder="메모"></input>
                    <p>시간</p>                    
                </div>
            </form>
        </div>
    );
}

export default ManageEditor;