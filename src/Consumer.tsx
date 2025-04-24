'use client'

import { forwardRef, ForwardedRef, JSX } from 'react'
import { MdError } from 'react-icons/md'
import {
  Button,
  ButtonGroup,
  ButtonProps,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger
} from '@chakra-ui/react'
import { impressedContext } from './impressedContext'

function View (
  props: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
): JSX.Element {
  const button = impressedContext.use()
  const View = button.View ?? Button
  if (button.error == null) {
    const mainView = (
      <View
        isLoading={button.loading}
        onClick={button.handleClick}
        type={button.type}
        ref={ref}
        {...props}
      />
    )
    if (button.leftButtons == null) {
      return mainView
    }
    return (
      <ButtonGroup isAttached orientation={button.orientation}>
        {button.leftButtons}
        {mainView}
      </ButtonGroup>
    )
  }
  const icon = <MdError />
  const sizeProps = props.size == null ? {} : { size: props.size }
  return (
    <ButtonGroup isAttached orientation={button.orientation}>
      {button.leftButtons}
      <Button
        onClick={button.handleClick}
        isLoading={button.loading}
        type={button.type}
        ref={ref}
        {...props}
        variant='solid'
      />
      <Popover>
        <PopoverTrigger>
          <IconButton
            aria-label='Error'
            colorScheme='red'
            icon={icon}
            variant='solid'
            {...sizeProps}
          />
        </PopoverTrigger>
        <PopoverContent zIndex={1}>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            {button.error}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </ButtonGroup>
  )
}

const Consumer = forwardRef(View)

export default Consumer