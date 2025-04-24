'use client'

import { MdError } from 'react-icons/md'
import {
  ButtonGroup, IconButton, IconButtonProps, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger
} from '@chakra-ui/react'
import { ForwardedRef, forwardRef, JSX } from 'react'
import { impressedContext } from './impressedContext'

function Consumer (
  props: IconButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
): JSX.Element {
  const button = impressedContext.use()
  if (button.error == null) {
    const main = (
      <IconButton
        variant='ghost'
        isLoading={button.loading}
        onClick={button.handleClick}
        ref={ref}
        type={button.type}
        {...props}
      />
    )
    if (button.IconView == null) {
      return main
    }
    return (
      <ButtonGroup isAttached orientation={button.orientation}>
        {button.leftButtons}
        {main}
      </ButtonGroup>
    )
  }

  return (
    <ButtonGroup isAttached orientation={button.orientation}>
      {button.leftButtons}
      <IconButton
        onClick={button.handleClick}
        isLoading={button.loading}
        ref={ref}
        type={button.type}
        {...props}
        variant='solid'
      />
      <Popover>
        <PopoverTrigger>
          <IconButton
            aria-label='Error'
            icon={<MdError />}
            colorScheme='red'
          />
        </PopoverTrigger>
        <PopoverContent>
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

const IconConsumer = forwardRef(Consumer)
export default IconConsumer
