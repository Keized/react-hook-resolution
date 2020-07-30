import React, { useState } from 'react';
import Header from './Header';
import DeviceAnimation from './DeviceAnimation';
import Form from './Form';

const App = () => {
    const [breakpoints, setBreakpoints] = useState({
        desktop: 992,
        tablet: 768,
        mobile: 0
    });

    return (
        <div>
            <Header />
            <DeviceAnimation breakpoints={breakpoints} />
            <Form breakpoints={breakpoints} setBreakpoints={setBreakpoints} />
        </div>
    );
};

export default App;
