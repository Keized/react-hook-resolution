import React from 'react';
import { useResolution } from 'react-hook-resolution';

export default ({breakpoints}) => {
  const resolution = useResolution(breakpoints);

  return (
      <div id="device-container">
        {console.log(breakpoints)}
        {console.log(resolution)}
        <h3>You're on {resolution.desktop ? 'desktop / laptop' : resolution.tablet ? 'tablet (or baby laptop)' : 'mobile'} !</h3>
        <div id="device" className={resolution.desktop ? 'desktop' : resolution.tablet ? 'tablet' : 'mobile'}>
          <div className="keyboard" />
        </div>
        <p>Try to resize your page</p>
      </div>
    )
}
