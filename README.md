# react-hook-resolution

> Get the screen resolution of your app with a simple react hook

[![NPM](https://img.shields.io/npm/v/react-hook-resolution.svg)](https://www.npmjs.com/package/react-hook-resolution) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-hook-resolution
```

## Usage

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

## License

MIT © [Keized](https://github.com/Keized)
