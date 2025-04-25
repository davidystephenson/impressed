import { ReactNode, useState, JSX } from "react"
import { Button, ButtonProps, ChakraProvider, IconButton, IconButtonProps } from "@chakra-ui/react"
import { MdQuestionMark } from "react-icons/md"
import IconImpressed from "./IconImpressed"
import Impressed from "./Impressed"

function UnforwardedButton (props: ButtonProps): JSX.Element {
  return <Button {...props} />
}

function UnforwardedIconButton (props: IconButtonProps): JSX.Element {
  return <IconButton {...props} />
}

function UiButton(props: ButtonProps) {
  return (
    <Button variant='ghost' colorScheme='teal' size='lg' {...props}>
      {props.children}
    </Button>
  )
}

function UiIconButton(props: IconButtonProps) {
  return (
    <IconButton variant='ghost' colorScheme='teal' size='lg' {...props}>
      {props.children}
    </IconButton>
  )
}

export default function App() {
  const [error, setError] = useState<ReactNode>()
  const [iconError, setIconError] = useState<ReactNode>()
  function handleClick(): void {
    setError('hello')
  }
  function handleIconClick(): void {
    setIconError('hello')
  }
  return (
    <ChakraProvider>
      <div>
        <UiButton onClick={handleClick}>
          Click Me
        </UiButton>
      </div>
      <div>
        <Impressed onClick={handleClick} error={error} View={UiButton} IconView={UiIconButton}>
          Click Me
        </Impressed>
      </div>
      <div>
        <UiIconButton onClick={handleClick} aria-label="Icon Button" icon={<MdQuestionMark />} />
      </div>
      <div>
        <IconImpressed onClick={handleClick} error={error} IconView={UiIconButton} aria-label="Icon Button" icon={<MdQuestionMark />} />
      </div>

      <div>
        <Impressed onClick={handleClick} error={error}>
          Click Me
        </Impressed>
      </div>
      <div>
        <Impressed onClick={handleClick} error={error} variant='ghost' colorScheme='purple' size='sm'>
          Click Me
        </Impressed>
      </div>
      <div>
        <Impressed onClick={handleClick} error={error} View={Button} IconView={UnforwardedIconButton}>
          Click Me
        </Impressed>
      </div>
      <div>
        <Impressed onClick={handleClick} error={error} View={UnforwardedButton} IconView={UnforwardedIconButton}>
          Click Me
        </Impressed>
      </div>
      <div>
        <IconImpressed
          IconView={UnforwardedIconButton}
          onClick={handleIconClick}
          icon={<MdQuestionMark />}
          aria-label="Icon Button"
          error={iconError}
          leftButtons={<Button>Left</Button>}
        />
      </div>
    </ChakraProvider>
  )
}
