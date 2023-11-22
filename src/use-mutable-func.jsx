/*
 * Copyright (c) 2020-23 Prolincur Technologies LLP.
 * All Rights Reserved.
 */

import React from 'react'
import { useMutableRef } from './use-mutable-ref'

/**
 * This is a react hook to wrap a callback as ref underneath to avoid unwanted react re-renders.
 *
 * @param {func} value A function
 *
 * @author Sourabh Soni <https://prolincur.com>
 */
const useMutableFunc = (callback) => {
  const callbackRef = useMutableRef(callback)

  // Wrapper on the ref
  const mutableCallback = React.useCallback((...args) => callbackRef.current?.(...args), [
    callbackRef,
  ])

  return mutableCallback
}

export { useMutableFunc }
