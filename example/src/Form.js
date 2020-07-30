import React from 'react';

export default ({ breakpoints, setBreakpoints }) => {
    const onChange = (value, title) => {
        setBreakpoints((prev) => ({ ...prev, [title]: value }));
    };

    return (
        <form>
            <div className='form-group'>
                <label htmlFor='mobile-input'>Mobile Breakpoint</label>
                <input
                    type='text'
                    id='mobile-input'
                    value={breakpoints.mobile}
                    onChange={(e) => onChange(e.currentTarget.value, 'mobile')}
                />
            </div>

            <div className='form-group'>
                <label htmlFor='tablet-input'>Tablet breakpoint</label>
                <input
                    type='text'
                    id='tablet-input'
                    value={breakpoints.tablet}
                    onChange={(e) => onChange(e.currentTarget.value, 'tablet')}
                />
            </div>

            <div className='form-group'>
                <label htmlFor='desktop-input'>Desktop breakpoint</label>
                <input
                    type='text'
                    id='desktop-input'
                    value={breakpoints.desktop}
                    onChange={(e) => onChange(e.currentTarget.value, 'desktop')}
                />
            </div>
        </form>
    );
};
