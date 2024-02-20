import { Button } from '@/components/ui/button'
import { CheckBox } from '@/components/checkbox'
import { Input } from '@/components/ui/textfield'

export function App() {
  return (
    <div>
      <Button as={'a'} href={'http://google.com'} variant={'primary'}>
        Hello
      </Button>
      <CheckBox checked={true} />
      <Input />
    </div>
  )
}
