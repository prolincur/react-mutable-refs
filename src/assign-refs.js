/*
 * Copyright (c) 2020-24 Prolincur Technologies LLP.
 * All Rights Reserved.
 */

import { mergeRefs } from './merge-refs'

/**
 * Method to assign value to multiple refs. It internally uses mergeRefs
 * @param {arrray} refs
 * @param {any} value
 */
const assignRefs = (refs, value) => mergeRefs(refs)(value)

export { assignRefs }
