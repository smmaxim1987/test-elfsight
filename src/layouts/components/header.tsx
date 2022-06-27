import * as React from 'react'
import { paths } from 'constant'
import { NavLink } from 'react-router-dom'

export type HeaderProps = React.HTMLAttributes<HTMLElement>

const mainNavs = [
  { url: paths.home(), name: 'Главная' },
]

function HeaderRaw(props: HeaderProps) {
  return (
    <div {...props}>
      <nav>
        {mainNavs.map(({ url, name }) => (
          <NavLink to={url} key={name}>
            {name}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}

export const Header = React.memo(HeaderRaw)
