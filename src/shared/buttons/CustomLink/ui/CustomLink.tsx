import { Link, LinkProps } from '@tanstack/react-router'
import { FC, ReactNode } from 'react'

type TypeButtonNavIconLabel = LinkProps & {
  children: ReactNode
  className?: string,
}

export const CustomLink: FC<TypeButtonNavIconLabel> = (props) => {
  return (
    <Link {...props} >
      {props.children}
    </Link>
  )
}
