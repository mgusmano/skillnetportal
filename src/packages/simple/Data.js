import { useSimpleState } from './state/SimpleProvider';

export const Data = (() => {
  const simpleState = useSimpleState();

  return (
    <div>
      {simpleState.operators !== null &&
        simpleState.operators.map((operator,i) => {
          return <div key={i}>{operator.operatorName}</div>
        })
      }
    </div>
  )
})
