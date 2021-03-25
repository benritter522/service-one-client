import Map from '../Map';
import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';


const MapView = () => {

  const [minorChecked, setMinorChecked] = React.useState(true);
  const [moderateChecked, setModerateChecked] = React.useState(true);
  const [seriousChecked, setSeriousChecked] = React.useState(true);
  const [criticalChecked, setCriticalChecked] = React.useState(true);

  const handleMinorChange = (event) => {
    setMinorChecked(event.target.checked)
  }
  const handleModerateChange = (event) => {
    setModerateChecked(event.target.checked)
  }
  const handleSeriousChange = (event) => {
    setSeriousChecked(event.target.checked)
  }
  const handleCriticalChange = (event) => {
    setCriticalChecked(event.target.checked)
  }


    return(
      <div>

        <Map 
          minorChecked={minorChecked} 
          moderateChecked={moderateChecked} 
          seriousChecked={seriousChecked} 
          criticalChecked={criticalChecked}
        />
        <p>View Businesses Based On Your Desired Impact:</p>
        <div style={{display: 'flex', flexWrap: 'wrap', maxWidth: '100vw', marginBottom: 20, justifyContent: 'center'}}>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Checkbox 
              checked={minorChecked} 
              onChange={handleMinorChange} 
              color="default"
              inputProps={{ 'aria-label' : 'secondary checkbox'}}
            />
            <p>Minor Impact</p>
            <img style={{width: 40, height: 50}} src="https://res.cloudinary.com/bitingrent/image/upload/v1616616185/service-one/Minor_Need_m0lnc5.png" alt=""/>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Checkbox 
              checked={moderateChecked} 
              onChange={handleModerateChange} 
              color="default"
              inputProps={{ 'aria-label' : 'secondary checkbox'}}
            />
            <p>Moderate Impact</p>
            <img style={{width: 40, height: 50}} src="https://res.cloudinary.com/bitingrent/image/upload/v1616616185/service-one/Moderate_Need_lhwil8.png" alt=""/>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Checkbox 
              checked={seriousChecked} 
              onChange={handleSeriousChange} 
              color="default"
              inputProps={{ 'aria-label' : 'secondary checkbox'}}
            />
            <p>Serious Impact</p>
            <img style={{width: 40, height: 50}} src="https://res.cloudinary.com/bitingrent/image/upload/v1616616185/service-one/Serious_Need_kzcveb.png" alt=""/>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Checkbox 
              checked={criticalChecked} 
              onChange={handleCriticalChange} 
              color="default"
              inputProps={{ 'aria-label' : 'secondary checkbox'}}
            />
            <p>Critical Impact</p>
            <img style={{width: 40, height: 50}} src="https://res.cloudinary.com/bitingrent/image/upload/v1616616185/service-one/Critical_Need_csmdmo.png" alt=""/>
          </div>
        </div>
      </div>
    )
}


export default MapView;
