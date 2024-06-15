import './LightSwitch.css';
import { useTheme } from '../../context/ThemeContext';

function LightSwitch() {
  const {themeName, setThemeName} = useTheme();
  //why does onclick not need a useeffect? is it because the state changes so it rerenders?

  return (
    <div className={`light-switch ${themeName}`}>
      <div className="on" onClick={()=>{setThemeName('day')}}>day</div>
      <div className="off" onClick={()=>{setThemeName('night')}}>night</div>
    </div>
  );
}

export default LightSwitch;
