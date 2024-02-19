/*
 * Copyright (c) 2020-24 Prolincur Technologies LLP.
 * All Rights Reserved.
 */

import React from 'react'
import { mergeRefs } from './merge-refs'

const trackLastRef = (Component) => {
  const lastInstanceRef = React.createRef(null)

  const WrappedComponent = React.forwardRef((props, ref) => (
    <Component ref={mergeRefs([lastInstanceRef, ref])} {...props} />
  ))
  
  WrappedComponent.lastRef = lastInstanceRef
  return WrappedComponent
}

export { trackLastRef }
