import { AccessDataProps } from '@/types'

export const handleSendAccessData = async ({ action, category, label }: AccessDataProps) => {
  await fetch('/api/sendAccessData', {
    method: 'POST',
    body: JSON.stringify({ action, category, label })
  })
}
