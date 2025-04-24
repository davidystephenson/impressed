'use client'

import { ImpressedContextValue } from './types'
import contextCreator from 'context-creator'

export const impressedContext = contextCreator({
  name: 'impressed',
  useValue: (props: ImpressedContextValue) => {
    const value = {
      ...props
    }
    return value
  }
})
