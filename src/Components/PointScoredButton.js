import { useDispatch } from "react-redux";
import { pointScored } from "./store";

export const PointScoredButton = ({playerId, children})=>{
    const dispatch = useDispatch();
    const handleClick = ()=>{dispatch(pointScored({player : playerId}))
    }
    return (
        <button className="button" onClick={handleClick}>{children}</button>
    );
};