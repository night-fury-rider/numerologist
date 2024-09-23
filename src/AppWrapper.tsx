import {Provider} from 'react-redux';

import App from 'App';
import {store} from '$common/redux/store';
import {PaperProvider} from 'react-native-paper';

const AppWrapper = () => {
  return (
    <PaperProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </PaperProvider>
  );
};

export default AppWrapper;
