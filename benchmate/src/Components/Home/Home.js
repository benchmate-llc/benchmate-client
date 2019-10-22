import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Home extends Component{
    constructor(){
        super();
        this.state={}
    }
    render (){
        return (
            <div className='menu-buttons'>
                <Button style={{margin: 5}} variant="contained" color="primary">Home</Button>
                <Button style={{margin: 5}} variant="contained" color="primary">Profile</Button>
                <Button style={{margin: 5}} variant="contained" color="primary">Appointments</Button>
            </div>
            <h2>Welcome to Your Personal Bench!</h2>
        )
    }
}
    