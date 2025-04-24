'use client'

import { forwardRef, ForwardedRef, JSX } from 'react'
import Consumer from './Consumer'
import { ImpressedContextValue } from './types'
import { ButtonProps } from '@chakra-ui/react'
import { impressedContext } from './impressedContext'

function View (
  props: {
    leftButton?: JSX.Element
  } & ImpressedContextValue & ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
): JSX.Element {
  const {
    error,
    handleClick,
    IconView,
    leftButtons,
    loading,
    orientation,
    type,
    View,
    ...restProps
  } = props
  function onClick (): void {
    handleClick?.()
  }
  return (
    <impressedContext.Provider
      error={error}
      handleClick={onClick}
      IconView={IconView}
      leftButtons={leftButtons}
      loading={loading}
      orientation={orientation}
      type={type}
      View={View}
    >
      <Consumer ref={ref} {...restProps} />
    </impressedContext.Provider>
  )
}

const Impressed = forwardRef(View)

export default Impressed
