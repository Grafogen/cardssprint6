import { Button } from '@/components/ui'

export function App() {
  return (
    <div>
      <Button as={'a'} href={'http://google.com'} variant={'primary'}>
        Hello
      </Button>
    </div>
  )
}
