/*
 * Copyright (c) 2020-24 Prolincur Technologies LLP.
 * All Rights Reserved.
 */

import React from 'react'
import PropTypes from 'prop-types'
import { mergeRefs } from './merge-refs'

const trackDefaultRef = (Component) => {
  const defaultInstanceRef = React.createRef(null)

  const WrappedComponent = React.forwardRef((props, ref) => {
    const { makeDefault, ...restProps } = props
    const refs = React.useMemo(() => (makeDefault ? [defaultInstanceRef, ref] : [ref]), [
      makeDefault,
      ref,
    ])
    return <Component ref={mergeRefs(refs)} {...restProps} />
  })
  
  WrappedComponent.propTypes = {
    makeDefault: PropTypes.bool,
  }

  WrappedComponent.defaultProps = {
    makeDefault: false,
  }

  WrappedComponent.defaultRef = defaultInstanceRef
  return WrappedComponent
}

export { trackDefaultRef }
