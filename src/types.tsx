import { ButtonProps, IconButtonProps } from "@chakra-ui/react"
import { ComponentType, JSX, ReactNode, RefAttributes } from "react"

export interface ImpressedContextValue {
  error?: ReactNode | undefined
  handleClick?: () => void
  leftButtons?: JSX.Element
  IconView?: ComponentType<IconButtonProps & RefAttributes<HTMLButtonElement>>
  loading?: boolean
  orientation?: 'horizontal' | 'vertical'
  type?: 'button' | 'submit' | 'reset'
  View?: ComponentType<ButtonProps & RefAttributes<HTMLButtonElement>>
}
