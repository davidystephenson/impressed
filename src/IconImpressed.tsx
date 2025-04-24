'use client'

import { ImpressedContextValue } from './types'
import { IconButtonProps } from '@chakra-ui/react'
import IconConsumer from './IconConsumer'
import { ForwardedRef, forwardRef, JSX } from 'react'
import { impressedContext } from './impressedContext'

function View (
  props: Omit<ImpressedContextValue, 'View'> & IconButtonProps,
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
