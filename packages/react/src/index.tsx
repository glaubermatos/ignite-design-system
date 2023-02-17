import {styled  } from './styles'

const Button = styled('button', {
    border: 0,
    backgroundColor: '$ignite500',
    color: '$white',
    fontSize: '$sm',
    padding: '$2 $3',
    borderRadius: '$md',
})

export function App() {
    return <Button>Button</Button>
}
