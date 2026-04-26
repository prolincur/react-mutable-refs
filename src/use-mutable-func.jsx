/*
 * Copyright (c) 2020-26 Prolincur Technologies LLP.
 * All Rights Reserved.
 */

import React from 'react'
import { useMutableRef } from './use-mutable-ref'

/**
 * This is a react hook to wrap a callback as ref underneath to avoid unwanted react re-renders.
 *
 * @param {func} value A function
 *
 */
const useMutableFunc = (callback) => {
  const callbackRef = useMutableRef(callback)

  const mutableCallback = React.useCallback((...args) => callbackRef.current?.(...args), [])

  return mutableCallback
}

export { useMutableFunc }
