import ReactSlider from 'react-slider';
import { useClimateContext } from '../../context/ClimateContext';
import './Thermometer.css';

function Thermometer() {
  const {climate, setClimate} = useClimateContext();
  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {climate}°F</div>
      <ReactSlider
        value={climate}
        onAfterChange={(val) => setClimate(val)}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;
