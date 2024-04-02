
# react-mutable-refs

**react-mutable-refs** provides utility to create mutable ref or function. This helps you in avoiding unwanted React re-renders.

#### Install
```
yarn add react-mutable-refs
```
or
```
npm i react-mutable-refs
```

#### Usage

```javascript

import { useMutableFunc, useMutableRef } from 'react-mutable-refs'

function ExamplePage(props) {
  const { item } = props
  const mutableItemRef = useMutableRef(item)

  // myFunciton will not re-render due to any change item
  const myFunction = React.useCallback(() => {
    if (mutableItemRef.current) {
      // do something
    }
  }, [mutableItemRef])


}


function useExampleHook(props) {
  const { prop1, prop2 } = props

  const someFunction = React.useCallback(() => {
    if (prop1 && prop2) {
      // do something
    }
  }, [prop1, prop2])

  
  const mutableFunc = useMutableFunc(someFunction)
  // mutableFunc is not affected by prop1, prop2 etc. and avoid unwanted re-render of React.
  return mutableFunc
}

```

### Components/Hooks/Functions
- useMutableRef
- useMutableFunc
- mergeRefs
- assignRefs
- trackDefaultRef
- trackLastRef
- Refreshable
- makeRefreshable

### Author

[Prolincur Technologies](https://prolincur.com)
