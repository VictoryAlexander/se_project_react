import { useState, useContext, useEffect } from 'react';
import './ToggleSwitch.css';
import CurrentTemperatureUnitContext from '../../contexts/CurrentTemperatureUnitContext';

function ToggleSwitch() {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(CurrentTemperatureUnitContext);

  const [isChecked, setIsChecked] = useState(currentTemperatureUnit === 'C');
  useEffect(() => setIsChecked(currentTemperatureUnit === 'C'), [currentTemperatureUnit]);

  const [tempFahrColor, setTempFahrColor] = useState('');
  const [tempCelColor, setTempCelColor] = useState('');

  useEffect(() => {
    if (currentTemperatureUnit === "F") {
      setTempFahrColor("white");
    } else {
      setTempFahrColor("#7e7e7e");
    }
  }, [currentTemperatureUnit]);

  useEffect(() => {
    if (currentTemperatureUnit === "C") {
      setTempCelColor("white");
    } else {
      setTempCelColor("#7e7e7e");
    }
  }, [currentTemperatureUnit]);

  return (
    <div className="toggle-switch">
      <label className="toggle-switch__label" htmlFor="toggle-switch">
        <p
          className="toggle-switch__label_fahrenheit"
          style={{ color: tempFahrColor }}
        >
          F
        </p>
        <p
          className="toggle-switch__label_celcius"
          style={{ color: tempCelColor }}
        >
          C
        </p>
        <input
          type="checkbox"
          className="toggle-switch__checkbox"
          id="toggle-switch"
          value={currentTemperatureUnit}
          onChange={handleToggleSwitchChange}
          checked={isChecked}
        />
        <span className={`toggle-switch__button`}></span>
      </label>
    </div>
  );
}

export default ToggleSwitch;