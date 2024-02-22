import { Outlet, createLazyFileRoute } from '@tanstack/react-router';
import { CustomLink } from '../shared/buttons/CustomLink/ui/CustomLink';

export const Route = createLazyFileRoute('/cards')({
  component: About,
})

function About() {
  return <div className="p-2">
    <CustomLink to='/cards/$cardId' params={{ cardId: '123' }} className="[&.active]:font-bold">Cards</CustomLink>
    <Outlet />
  </div>
}
