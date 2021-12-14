import React from 'react';
import GroupsIcon from '@mui/icons-material/Groups';

 
function Admin() {
    return (
        <div className='main'>
            <div className='gName'>
            <h2>Admin Group</h2>
            </div>
           <div className='icons'>
           <GroupsIcon style={{ fontSize: 50 }}/>
           </div>
            
        </div>
    )
}

export default Admin
