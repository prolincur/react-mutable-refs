/*
 * Copyright (c) 2020-23 Prolincur Technologies LLP.
 * All Rights Reserved.
 */

import React from 'react'

/**
 * This is a react hook to create a reference from value. Unlike React.useRef, it keeps the reference
 * updated as value changes directly, e.g. new value comes a props or state.
 *
 * @param {any} value Any value
 *
 * @author Sourabh Soni <https://prolincur.com>
 */
const useMutableRef = (value) => {
  const valueRef = React.useRef(value)

  React.useLayoutEffect(() => {
    valueRef.current = value
  }, [value])

  return valueRef
}

export { useMutableRef }
