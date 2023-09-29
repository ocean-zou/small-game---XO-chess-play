import { useState } from 'react';
import Square from "./Square"

const getNextLetter=(squares)=>{
    const filledSqaures=squares.filter(item=>(item==="X"|| item==="O"))
    const filledNumber=filledSqaures.length
    const nextLetter=(filledNumber%2===0)? "X":"O"
    return nextLetter
}
const calculateWinner=(squares)=>{
    const winConditions=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    const filledSqaures=squares.filter(item=>(item==="X"|| item==="O"))
    const filledNumber=filledSqaures.length
    for(let i=0;i<winConditions.length;i++){
        const winCondition=winConditions[i]
        const [a,b,c]=winCondition
        if(squares[a]&&squares[a]===squares[b]&&squares[b]===squares[c]){
            return squares[a]
        }
        if(filledNumber===9){
            return "Nobody"
        }
    }
    return null
}
function Board(){
    const [squares,setSquares]=useState(Array(9).fill(null))
    const nextLetter=getNextLetter(squares)
    let titleStatus
    const winner=calculateWinner(squares)
    titleStatus=winner?`${winner} is Winner`:`Next Player is ${nextLetter}`
    const clickHander=(index)=>{
        const currentSquare=squares[index]
        if(currentSquare===null&&!winner){
            const newSquares=[...squares]
            newSquares[index]=nextLetter
            setSquares(newSquares)
        }

    }
    return(
        <>  
            <div className="status">{titleStatus}</div>
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