import { useState, useContext, useEffect } from 'react';
import './ToggleSwitch.css';
import CurrentTemperatureUnitContext from '../../contexts/CurrentTemperatureUnitContext';

function ToggleSwitch() {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(CurrentTemperatureUnitContext);

  const [isChecked, setIsChecked] = useState(currentTemperatureUnit === 'C');
  useEffect(() => setIsChecked(currentTemperatureUnit === 'C'), [currentTemperatureUnit]);

  return (
    <div className='toggle-switch'>
      <label className='toggle-switch__label'>
        <input
          className='toggle-switch_checkbox toggle-switch__checkbox_state_hidden'
          type='checkbox'
          name='toggle-switch-checkbox'
          value={currentTemperatureUnit}
          onChange={handleToggleSwitchChange}
          checked={isChecked}
        />
        <span className='toggle-switch__checkbox toggle-switch__checkbox_state_visible'/>
      </label>
    </div>
  )
}

export default ToggleSwitch;