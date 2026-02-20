import React, { useState } from 'react'
const Rock = ()=>{

    let [you, setYou] = useState(0);
    let [computer, setComputer] = useState(0);
    let rps = ["Rock", "Paper", "Scissors"];
    let [rand, setRand] = useState (Math.floor(Math.random));
    let [buttontext, setButtontext] = useState("Restart");
    let [comment, setComment] = useState("");
    let [youchoice, setYouchoice] = useState("");
    let [comchoice, setComchoice] = useState("");
    
    const reset = ()=> {
        setYou(0);
        setComputer(0);
       setRand(Math.floor(Math.random() * rps.length));
       console.log(rps[rand]);
       setComchoice("")
       setYouchoice("")
       setComment("")
      setButtontext("Restart")

    };

const rock = ()=>{
    
     const random = Math.floor(Math.random() * rps.length);
    setRand(random);
     const computerPick = rps[random];
     setYouchoice("Rock");
     setComchoice (computerPick);
     if (computerPick === 'Paper') {
        
        setComputer (prev => prev +1)
        localStorage.setItem('computer-score', setComputer)
        setComment("you lose")
     }
    else if (computerPick === 'Rock') {
        setComment("Draw")
    }
    else if (computerPick === 'Scissors') {
        setYou (prev => prev +2)
        setComment("you win")
    }
} 

const paper = ()=>{
   
    const random = Math.floor(Math.random() * rps.length);
    setRand(random);
     const computerPick = rps[random];
     setYouchoice("Paper");
     setComchoice (computerPick);

     if (computerPick === 'Rock') {
        setYou (prev => prev +1)
        setComment("you win")
     }
     else if (computerPick === 'Paper') {
        setComment('Draw')
     }
     else if (computerPick === 'Scissors') {
        setComputer (prev => prev +1)
        
        setComment('you lose')
     }

}
const scissoors = ()=>{
 
    const random = Math.floor(Math.random() * rps.length);
    setRand(random);
     const computerPick = rps[random];
     setYouchoice("Scissors");
     setComchoice (computerPick);

     if (computerPick === 'Rock') {
        setComputer (prev => prev +1)
        setComment ('you lose')
     }
     else if (computerPick === 'Paper') {
        setYou (prev => prev +1)
        setComment ('you win')
     }
     else if (computerPick === 'Scissors') {
        setComment('Draw')
     }
}  







  return (
    <div className='h-screen w-screen flex justify-center items-center bg-pink-200'>
        <div className='h-[450px] w-[450px] rounded-3xl bg-pink-500'>
            <p className="text-end m-[10px] text-white">Computer: {computer}</p>
        <p className="text-end m-[10px] text-white">You:{you} </p>

        <div className='h-[200px] flex items-center justify-around'>
            <div onClick={rock} className='h-[100px] w-[100px] rounded-full bg-pink-200 flex justify-center items-center cursor-pointer'>
                <p className='text-white text-6xl'>✊</p>
            </div>
            <div onClick={paper} className='h-[100px] w-[100px] rounded-full bg-pink-200 flex justify-center items-center cursor-pointer'>
                <p className='text-white text-6xl'>🫱</p>
            </div>
            <div onClick={scissoors} className='h-[100px] w-[100px] rounded-full bg-pink-200 flex justify-center items-center cursor-pointer'>
                <p className='text-white text-6xl'>✌️</p>
            </div>
        </div>

        <div>
            <p className='text-center text-white'>You Choose {youchoice} </p>
            <p className='text-center text-white'>Computer choose {comchoice}</p>
        </div>
        <div className='h-[50px] w-full flex justify-around items-center text-white'>
          <p>{comment}</p>
        </div>
        <div className='flex justify-center items-center h-[80px]'>
            <button onClick={reset}  className='h-[40px] w-[120px] rounded-2xl bg-pink-200 text-white cursor-pointer'>{buttontext}</button>
        </div>
        </div>
    </div>
  )}

export default Rock