
# react-mutable-refs

**react-mutable-refs** provides utilities for working with React refs — keeping refs in sync with the latest values, merging multiple refs, and wrapping components with ref-tracking and refresh capabilities.

Zero runtime dependencies. Requires React ≥ 17.

#### Install

```
yarn add react-mutable-refs
```
or
```
npm i react-mutable-refs
```

---

## Hooks

### `useMutableRef(value)`

Creates a ref that always holds the latest value. Unlike `React.useRef`, it stays in sync as props or state change without causing re-renders.

```jsx
import { useMutableRef } from 'react-mutable-refs'

function MyComponent({ onEvent }) {
  const onEventRef = useMutableRef(onEvent)

  React.useEffect(() => {
    const handler = () => onEventRef.current?.()
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, []) // safe: onEventRef.current always points to the latest onEvent
}
```

---

### `useMutableFunc(callback)`

Wraps a callback in a stable function reference backed by a mutable ref. The returned function never changes identity, so it can be passed as a prop or used in an effect dependency array without causing re-renders when the callback itself changes.

```jsx
import { useMutableFunc } from 'react-mutable-refs'

function MyComponent({ onChange }) {
  const stableOnChange = useMutableFunc(onChange)

  // stableOnChange is referentially stable; passing it to a child
  // does not trigger re-renders when onChange changes.
  return <ExpensiveChild onChange={stableOnChange} />
}
```

---

## Utilities

### `mergeRefs(refs)`

Merges multiple refs (callback refs or object refs) into a single ref callback. Useful when you need to attach more than one ref to a single element.

```jsx
import { mergeRefs } from 'react-mutable-refs'

const MyInput = React.forwardRef((props, ref) => {
  const localRef = React.useRef(null)
  return <input ref={mergeRefs([localRef, ref])} {...props} />
})
```

---

### `assignRefs(refs, value)`

Assigns a value to multiple refs at once. Thin wrapper over `mergeRefs`.

```jsx
import { assignRefs } from 'react-mutable-refs'

assignRefs([refA, refB, callbackRef], domNode)
```

---

## Higher-Order Components

### `trackLastRef(Component)`

Wraps a component so the most recently mounted instance is always accessible via `WrappedComponent.lastRef`.

```jsx
import { trackLastRef } from 'react-mutable-refs'

const TrackedModal = trackLastRef(Modal)

// Anywhere in your app:
TrackedModal.lastRef.current?.focus()

// The ref is also forwarded normally:
<TrackedModal ref={myRef} />
```

---

### `trackDefaultRef(Component)`

Wraps a component so one instance can be designated as the "default" via the `makeDefault` prop. That instance is accessible via `WrappedComponent.defaultRef`.

```jsx
import { trackDefaultRef } from 'react-mutable-refs'

const TrackedTooltip = trackDefaultRef(Tooltip)

// Mark one instance as the default:
<TrackedTooltip makeDefault />

// Access it from anywhere:
TrackedTooltip.defaultRef.current?.show('Hello')
```

---

### `Refreshable`

Wraps a child component and exposes a `refresh()` method on its ref. Calling `refresh()` remounts the child, useful for forcing a full reset of internal state.

```jsx
import { Refreshable } from 'react-mutable-refs'

function Parent() {
  const ref = React.useRef(null)

  return (
    <>
      <button onClick={() => ref.current?.refresh()}>Reset</button>
      <Refreshable ref={ref}>
        <MyWidget />
      </Refreshable>
    </>
  )
}
```

`Refreshable` accepts exactly one child element.

---

### `makeRefreshable(Component)`

Convenience HOC that combines `Refreshable` with `trackDefaultRef`. The wrapped component gains:

- A forwarded ref with a `refresh()` method.
- A static `defaultRef` for the instance marked `makeDefault`.
- A static `refresh()` shortcut that calls `refresh()` on the default instance.

```jsx
import { makeRefreshable } from 'react-mutable-refs'

const RefreshableChart = makeRefreshable(Chart)

// Render with makeDefault to register the default instance:
<RefreshableChart makeDefault data={data} />

// Refresh from anywhere without holding a ref:
RefreshableChart.refresh()
```

---

## License

Apache-2.0 © [Prolincur Technologies](https://prolincur.com)
