import React from "react";
import  { useState, useReducer } from "react";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
 import Select from '@material-ui/core/Select';
 import MeetingDate from "./MeetingDate";

const options = [
    {
        name : "training-room" ,
        value :" Training Room"

    },
    {
        name : "meeting-room ",
        value : "Meeting Room"

    }
];
const useStyle = makeStyles((theme) =>
(
    {
        formControl : {
            margin: theme.spacing(1),
            minWidth : 400,
        },
        selectEmpty :{
            marginTop : theme.spacing(2)
        },
        root: {
            '& .MuiTextField-root': {
              margin: theme.spacing(1),
              minWidth : 400,
              placeholder: "left",   
              marginTop : 30,
              
              
            },
            
        }

    }
));


function MeetingInfo() {
    
    const classes = useStyle();
  
        const initialState = {
            meetingroom : "",
            
            name :"",
            
            description : ""
            
        }
    
    const handleTextChange = (e) =>
    {
        
            dispatch ({
                type : "HANDLE INPUT",
                field : e.target.name,
                payload : e.target.value
            })
           
    }
    const handleOptionChange = (e) =>
    {
        console.log(e);
        dispatch({
            type : "HANDLE OPTION",
            field : e.target.name,
            payload : e.target.value

        })
    }


    function reducer(state, action) 
    {
       
       switch (action.type)
       {
           case "HANDLE INPUT":
               return {
                   ...state,
                   
                   [action.field] : action.payload
               };
        
        case "HANDLE OPTION":
                return {
                    ...state,
                    [action.field] : action.payload
                };

        default :
                return state;
       }

    }
    const [state, dispatch] = useReducer(reducer, initialState);

    console.log(`name ${initialState.name}  desc ${initialState.description}   room ${initialState.meetingroom}`)
    function handleSubmit ()
    {
        if(state.name === "")
        {
            alert("Please enter your name !!!")
        }
        else if(state.description === "")
        {
            alert("Please enter meeting description !!!")
        }
        else{
            console.log(state.name);
            {state &&<MeetingDate props = {state} /> }
        }
    }
  
  return (
    <>
    <div className="info-container">

        
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="outlined-meeting-room">Meeting Room</InputLabel>
           
            <Select
                native
                className="input-container" 
                value={state.meetingroom}
                onChange={(ele) => handleOptionChange(ele)}
                
                 label ="Meeting Room"
                inputProps={{
                    name : "meetingroom",
                    id : "outlined-meeting-room"


                }} 
            >
                {options.map((item, index)=>
                {
                return ( <option key={item.value} value ={item.value} onChange={(ele) => handleOptionChange(ele)} >
                    {item.value}
                </option>);
                })}

            </Select> 
          
        </FormControl>
        <form  className={classes.root} noValidate autoComplete="off" > 
              
                    <TextField
                        required
                        id="outlined-name"
                        label = "Name"
                        variant = "outlined"
                        placeholder="Enter your name"
                        name ="name"
                        type ="text"
                        value={state.name}
                        onChange={(ele) => handleTextChange(ele)}
                        InputLabelProps={{
                            shrink: true,
                          }}
                    />
    
                   
                <TextField
                    required
                    id="outlined-description"
                    label = "Meeting description"
                    name = "description"
                    type = "text"
                    variant = "outlined"
                    value={state.description}
                    placeholder="Enter meeting description"
                    onChange={(ele) => handleTextChange(ele)}
                    InputLabelProps={{
                        shrink: true,
                      }}
                />

               

        </form>
        <button  type="submit" className="nextbtn"
         onClick ={handleSubmit}>
                    Next
                </button>

             
     </div>

    </>
  );
}

export default MeetingInfo;
