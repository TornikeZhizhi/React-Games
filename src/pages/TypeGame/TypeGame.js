import React, { useEffect, useRef, useState } from 'react';

import classes from "./TypeGame.module.css";







const TypeGame = () => {

    const typeText = "Prepared by experienced English teachers"
    const [text, setText ] = useState([]);
    const [textareaText, setTextAreaText] = useState("")
    const [record, setRecord] = useState(0);
    const [gameTime, setGameTime] = useState(0)
    
    const textareaHandler =(e)=> {
        setTextAreaText(e.target.value.toLowerCase());
    } 

    let interval = useRef()
    const startTimer = ()=> {
        interval.current = setInterval(() => {
            setGameTime(prev=>prev + 1)
        }, 1000);
    }

    

    // useEffect(()=>{
    //     const cartItems = [
    //         { 
    //             id:1,
    //             quantity:2
        
    //         },
    //         { 
    //             id:2,
    //             quantity:3
    //         },
    //         { 
    //             id:3,
    //             quantity:1
    //         },
    //     ]
    //     const cartQuantity = cartItems.reduce((quantity,item)=>
    //          item.quantity + quantity, 0
    //     )


  
    // },[])
  
    useEffect(()=>{
        startTimer()
    },[interval])
  
    const resetGame=()=>{
        setTextAreaText("")
        startTimer()
        setRecord(prevRecord=>{
            if(prevRecord ==0){
                return gameTime
            }
            else if(gameTime < prevRecord){
                return gameTime
            }else {
                return prevRecord
            }
        })
    }   

    useEffect(()=>{
        // let updatedArray = text

        // for (let k = 0; k < text.length; k++) {
        //         if(text[k].letter == textareaText[k]){
        //             updatedArray[k].active = "green"
        //         }else if((textareaText.length -1) == k){
        //             updatedArray[k].active = "red" 
        //         }else {
        //             updatedArray[k].active = "black"
        //         }
        // }
        // setText(updatedArray)
        
        
        let greenCounter = 0;
        const editData = text.map((data,index)=>{  
            if(index >= textareaText.length){
                return  {...data,active:"black"}  
            }
            if(data.letter == textareaText[index]) {
                greenCounter++;
                return  {...data,active:"green"};
            }
            else if((textareaText.length -1 ) == index){
                return  {...data,active:"red"}  
            }
            else {
                return data
            }  
        })
        
        if(greenCounter==text.length && greenCounter > 0){
            clearInterval(interval.current)
            setGameTime(0)

            setTimeout(function(){
                resetGame()
            },1000)
        }
        setText(editData)

    },[textareaText])

    // useEffect(()=>{
    //     console.log("gamoidaxaa")

    // },[text])

    useEffect(()=>{
        let sumData = [];
        typeText.toLowerCase().split("").map((data)=>{
            sumData.push({letter:data,active:"black"})
        })
        setText(sumData)
    },[])

  

    return (
        <div className={classes.maincontainer}>
            <div className={classes.header}>

            <span className={classes.smaltext}>Your Record: {record} Seconds</span>
            <div className={classes.score}>{gameTime}</div>
            </div>
            <span style={{color:"white"}}>
           {/* {JSON.stringify(text)} */}
            </span>
            <div className={classes.typeContainer}>

                <div className={classes.typeText}>
                    {text?.map((textData, index)=>{

                      return  <span className={classes.black + " " + (textData.active == "green" ? classes.green : " " ) + 
                      (textData.active == "red" ? classes.red : " ")
                  } key={index}>{textData.letter}</span>

                    })}
                </div>
                <textarea className={classes.textare} placeholder="Start Type.." value={textareaText} onChange={textareaHandler}></textarea>

            </div>
        </div>
    );
};

export default TypeGame;