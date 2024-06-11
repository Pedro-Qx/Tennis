import {useDispatch} from 'react-redux'
import {playPause} from './store';

export const PlayPauseButton = ()=>{
    const dispatch = useDispatch();
    
    return (
        <button className="button" id="pause" onClick={()=>{
            dispatch(playPause())
        }}>Pause / Reprendre</button>
    );
} 

