import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'

function App() {
  return (
    <div>
      <Button as={'a'} href={'https://google.com'}>
        hello
      </Button>
      <Slider maxValue={100} />
    </div>
  )
}

export default App
