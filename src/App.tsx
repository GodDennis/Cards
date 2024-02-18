import { Button } from '@/components/ui/button'
import SliderDemo from '@/components/ui/slider/slider'

function App() {
  return (
    <div>
      <Button as={'a'} href={'https://google.com'}>
        hello
      </Button>
      <SliderDemo maxValue={100} />
    </div>
  )
}

export default App
