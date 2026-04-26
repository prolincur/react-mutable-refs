/*
 * Copyright (c) 2020-26 Prolincur Technologies LLP.
 * All Rights Reserved.
 */

import React from 'react'
import PropTypes from 'prop-types'
import { assignRefs } from './assign-refs'
import { useMutableRef } from './use-mutable-ref'
import { trackDefaultRef } from './track-default-ref'

/**
 * Generic component to wrap any other component so to make it refreshable.
 * To refresh: call Refreshable.markDirty(id).
 * Limitations: markDirty will trigger refresh for ALL instances of the wrapped component
 *
 */
const Refreshable = React.forwardRef(({ children = null }, ref) => {
  const thisRef = React.useRef(null)
  // Counter to remount the component
  const [key, setKey] = React.useState(0)
  const keyRef = useMutableRef(key)

  const childElement = React.Children.only(children)

  const refresh = React.useCallback(() => {
    setKey(keyRef.current + 1)
  }, [keyRef])

  React.useLayoutEffect(() => {
    if (thisRef.current) {
      assignRefs([ref], {
        ...thisRef.current,
        refresh,
      })
    } else {
      assignRefs([ref], null)
    }
  }, [ref, refresh])

  return React.cloneElement(childElement, {
    ref: thisRef,
    key: `${childElement.key ?? ''}_${key}`,
  })
})

Refreshable.propTypes = {
  children: PropTypes.node,
}

/**
 *
 * Convenience method
 *
 */
const makeRefreshable = (Component) => {
  const WrappedComponent = trackDefaultRef(
    React.forwardRef((props, ref) => (
      <Refreshable ref={ref}>
        <Component {...props} />
      </Refreshable>
    ))
  )
  WrappedComponent.displayName = `makeRefreshable(${Component.displayName ?? Component.name})`
  // NOTE: this global refresh works only on default instance
  WrappedComponent.refresh = () => WrappedComponent.defaultRef?.current?.refresh?.()
  return WrappedComponent
}

export { Refreshable, makeRefreshable }
