import { useDispatch } from "react-redux";
import { restartGame } from "./store";

export const ResetButton = ()=>{
    const dispatch = useDispatch();
    
    return (
        <button className="button" onClick={()=>{
            dispatch(restartGame())
        }}>Remettre à zero</button>
    );
} 