import { useState, useLayoutEffect, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';

const initialState = { mobile: false, tablet: false, desktop: true };

export const useResolution = (
    breakpoints = { desktop: 992, tablet: 768, mobile: 0 },
    debounceDelay = 500
) => {
    const [resolution, setResolution] = useState(initialState);

    const updateSize = () => {
        const width = window.innerWidth;
        const currentResolution = { ...initialState };
        currentResolution.mobile = width < breakpoints.tablet;
        currentResolution.desktop = width >= breakpoints.desktop;
        currentResolution.tablet =
            width < breakpoints.desktop && width > breakpoints.tablet;
        setResolution(currentResolution);
    };

    const [sizeHandler] = useDebouncedCallback(updateSize, debounceDelay);

    useEffect(() => {
        updateSize();
    }, [breakpoints]);

    useLayoutEffect(() => {
        updateSize();
        window.addEventListener('resize', sizeHandler);
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return resolution;
};
