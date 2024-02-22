import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/cards/$cardId')({
  component: CardComponent,
})

function CardComponent() {
  const params = Route.useParams()
  return <div>Card {params.cardId}</div>
}
