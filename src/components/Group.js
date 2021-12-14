import React from 'react'
import './Group.css'
import Managers from "./Managers"
import Hr from "./Hr.js"
import It from "./It.js";
import Production from "./Production.js"
import Sales from "./Sales.js"
import Admin from "./Admin.js"

function Group() {
    return (<>
    <div className='btn-head'>
    <div className='btn'>Create Security Group</div>
    </div>
     
        <div className='Header'>
        
            <Admin/>
            <Managers/>
            <Sales/>
         
            <Hr/>
            <It/>
            <Production/>
            
        </div>
        </>
    )
}

export default Group
