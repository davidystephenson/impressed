'use client'

import { IconImpressedProps } from './types'
import IconConsumer from './IconConsumer'
import { ForwardedRef, forwardRef, JSX } from 'react'
import { impressedContext } from './impressedContext'

function View (
  props: IconImpressedProps,
  ref: ForwardedRef<HTMLButtonElement>
): JSX.Element {
  const {
    error,
    handleClick,
    IconView,
    leftButtons,
    loading,
    type,
    orientation,
    ...restProps
  } = props
  function onClick (): void {
    handleClick?.()
  }
  return (
    <impressedContext.Provider
      error={error}
      loading={loading}
      handleClick={onClick}
      IconView={IconView}
      leftButtons={leftButtons}
      orientation={orientation}
      type={type}
    >
      <IconConsumer ref={ref} {...restProps} />
    </impressedContext.Provider>
  )
}

const IconImpressed = forwardRef(View)
export default IconImpressed
