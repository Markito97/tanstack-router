import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/settings/notification')({
  component: () => <div>Hello /settings/notification!</div>,
})
