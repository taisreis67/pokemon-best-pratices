import React from 'react'
import type { ReactNode } from 'react'

export type BaseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
}

const BaseButton: React.FC<BaseButtonProps> = ({ children, ...props }) => (
  <button {...props} style={{ cursor: props.disabled ? 'not-allowed' : 'pointer', ...props.style }}>
    {children}
  </button>
)

export default BaseButton
