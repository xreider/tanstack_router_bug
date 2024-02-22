import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { CustomLink } from '../shared/buttons/CustomLink/ui/CustomLink'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">

        <Link to='/' className="[&.active]:font-bold">Home</Link>
        <CustomLink to='/' className="[&.active]:font-bold">Home</CustomLink>
        <CustomLink to='/cards' params={{ cardId: '123' }} className="[&.active]:font-bold">Cards</CustomLink>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})
