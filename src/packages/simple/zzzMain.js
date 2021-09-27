import { useGlobalState } from './state/Provider';
import { Toolbar } from './Toolbar'

export const Main = (() => {
  const globalState = useGlobalState();
  return (
    <div>
      <Toolbar/>
      {globalState.userName}
      </div>
  )
})
