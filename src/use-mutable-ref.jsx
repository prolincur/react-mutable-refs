/*
 * Copyright (c) 2020-26 Prolincur Technologies LLP.
 * All Rights Reserved.
 */

import React from 'react'

/**
 * This is a react hook to create a reference from value. Unlike React.useRef, it keeps the reference
 * updated as value changes directly, e.g. new value comes a props or state.
 *
 * @param {any} value Any value
 *
 */
const useMutableRef = (value) => {
  const valueRef = React.useRef(value)
  valueRef.current = value
  return valueRef
}

export { useMutableRef }
