import React from 'react';
import { useResolution } from 'react-hook-resolution';

const App = () => {
  const resolution = useResolution();

  return <div>
    <h1>React hook resolution</h1>
    <h2><a href="https://github.com/Keized/react-hook-resolution">Github</a></h2>
    <div id="device-container">
      <h3>Your on {resolution.desktop ? 'desktop' : resolution.tablet ? 'tablet (or baby laptop)' : 'mobile'} !</h3>
      <div id="device" className={resolution.desktop ? 'desktop' : resolution.tablet ? 'tablet' : 'mobile'}>
        <div className="keyboard" />
      </div>
      <p>Try to resize your page</p>
    </div>
  </div>
}

export default App
