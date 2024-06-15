import './ClimateStats.css';
import {useClimateContext} from '../../context/ClimateContext'

function ClimateStats() {
  const {climate, humidity} = useClimateContext();

  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {climate}°F
      </div>
      <div className="humidity">
        Humidity {humidity}%
      </div>
    </div>
  )
}

export default ClimateStats;
