import { Button } from '@/components/ui/button'
import { CheckBox } from '@/components/checkbox'

export function App() {
  return (
    <div>
      <Button as={'a'} href={'http://google.com'} variant={'primary'}>
        Hello
      </Button>
      <CheckBox checked={true} />
    </div>
  )
}
