import { persistor, store } from "./redux/store/store";
import { Provider } from "react-redux";
import Routes from "./routes/Routes";
import { PersistGate } from "redux-persist/integration/react";
function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
