import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

class Appointment extends React.Component{
  handleChange = event => {
      setValue(event.target.value);
  };
    
    render() {
        return (
            <div>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                  <FormControlLabel value="female" control={<Radio color="primary"/>} label="Female" />
                  <FormControlLabel value="male" control={<Radio color="primary"/>} label="Male" />
                  <FormControlLabel value="other" control={<Radio color="primary"/>} label="X" />
                </RadioGroup>
              </FormControl>
            </div>
        );
    }    
}

export default Appointment;

