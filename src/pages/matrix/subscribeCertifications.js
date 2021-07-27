//import { useMatrixState } from './state/MatrixProvider';
import { API, graphqlOperation } from 'aws-amplify'
import { onUpdateCertification} from '../../graphql/subscriptions'

export const subscribeCertifications = async (matrixState) => {
  //const matrixState = useMatrixState();

  await API.graphql(graphqlOperation(onUpdateCertification)).subscribe({
    next: () => {
      console.log('in subscribe')
      matrixState.setAll()
    }
  });
};

// import { API, graphqlOperation } from 'aws-amplify'
// import { onUpdateCertification} from '../../graphql/subscriptions'
//import { subscribeCertifications } from './subscribeCertifications';
  // const subscribeCertifications = async () => {
  //   await API.graphql(graphqlOperation(onUpdateCertification)).subscribe({
  //     next: () => {
  //       matrixState.setAll()
  //     }
  //   });
  // };