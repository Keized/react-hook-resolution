# :no_entry: [DEPRECATED] New repo here : [https://github.com/Keized/react-hook](https://github.com/Keized/react-hook)





# react-hook-resolution

> Get the screen resolution of your page with a simple react hook

[![NPM](https://img.shields.io/npm/v/react-hook-resolution.svg)](https://www.npmjs.com/package/react-hook-resolution) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-hook-resolution
```

## Usage

**See this [example](https://keized.github.io/react-hook-resolution/) for live demo**


```jsx
import React, { Component } from 'react';

import { useResolution } from 'react-hook-resolution';

class Example extends Component {
  const resolution = useResolution();

  render() {
    return <div>
        {resolution.mobile && 'I am on mobile !'}
    </div>
  }
}
``` 

Pass config to override the default breakpoints

```jsx
import React, { Component } from 'react';

import { useResolution } from 'react-hook-resolution';

class Example extends Component {
  const resolution = useResolution({
                                           desktop: 1200,
                                           tablet: 900,
                                           mobile: 0
                                       });

  render() {
    return <div>
        {resolution.mobile && 'I am on mobile !'}
    </div>
  }
}
``` 

## License

MIT © [Keized](https://github.com/Keized)
