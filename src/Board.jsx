import { useState } from 'react';
import Square from "./Square"
function Board(){
    const [squares,setSquares]=useState(Array(9).fill(null))
    const clickHander=(index)=>{
        const currentSquare=squares[index]
        if(currentSquare===null){
            const filledSqaures=squares.filter(item=>(item==="X"|| item==="O"))
            const filledNumber=filledSqaures.length
            const nextLetter=(filledNumber%2===0)? "X":"O"
            const newSquares=[...squares]
            newSquares[index]=nextLetter
            setSquares(newSquares)
        }

    }
    return(
        <>
            <div className="board-row">
                <Square value={squares[0]} index={0} onClick={clickHander}/>
                <Square value={squares[1]} index={1} onClick={clickHander}/>
                <Square value={squares[2]} index={2} onClick={clickHander}/>
            </div>
            <div className="board-row">
                <Square value={squares[3]} index={3} onClick={clickHander}/>
                <Square value={squares[4]} index={4} onClick={clickHander}/>
                <Square value={squares[5]} index={5} onClick={clickHander}/>
            </div>
            <div className="board-row">
                <Square value={squares[6]} index={6} onClick={clickHander}/>
                <Square value={squares[7]} index={7} onClick={clickHander}/>
                <Square value={squares[8]} index={8} onClick={clickHander}/>
            </div>
        </>
    )
}
export default Board