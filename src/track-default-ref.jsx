/*
 * Copyright (c) 2020-26 Prolincur Technologies LLP.
 * All Rights Reserved.
 */

import React from 'react'
import PropTypes from 'prop-types'
import { mergeRefs } from './merge-refs'

const trackDefaultRef = (Component) => {
  const defaultInstanceRef = React.createRef(null)

  const WrappedComponent = React.forwardRef((props, ref) => {
    const { makeDefault = false, ...restProps } = props
    const refs = React.useMemo(() => (makeDefault ? [defaultInstanceRef, ref] : [ref]), [
      makeDefault,
      ref,
    ])
    return <Component ref={mergeRefs(refs)} {...restProps} />
  })

  WrappedComponent.propTypes = {
    makeDefault: PropTypes.bool,
  }

  WrappedComponent.displayName = `trackDefaultRef(${Component.displayName ?? Component.name})`
  WrappedComponent.defaultRef = defaultInstanceRef
  return WrappedComponent
}

export { trackDefaultRef }
