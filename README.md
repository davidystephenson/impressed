# Impressed

A Chakra UI Button with Popover error feedback

## Installation

`npm install impressed`

## Usage

```tsx
import { Impressed, IconImpressed } from 'impressed'
import { ChakraProvider } from '@chakra-ui/react'

export default function App() {
  const [error, setError] = useState<ReactNode>()
  function handleClick(): void {
    setError('test')
  }
  return (
    <ChakraProvider>
      <Impressed onClick={handleClick} error={error}>
        Click Me
      </Impressed>
      <IconImpressed
        onClick={handleClick}
        aria-label="Icon Button"
        error={error}
      />
    </ChakraProvider>
  )
}
```
