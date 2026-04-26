/*
 * Copyright (c) 2020-26 Prolincur Technologies LLP.
 * All Rights Reserved.
 */

const mergeRefs = (refs) => (value) => {
  refs.forEach((ref) => {
    if (typeof ref === 'function') {
      ref(value)
    } else if (ref != null) {
      ref.current = value
    }
  })
}

export { mergeRefs }
