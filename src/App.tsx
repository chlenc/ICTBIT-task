import React from "react";
import "./App.css";
import { useStores } from "./stores";
import DisplayUser from "./components/DisplayUser";
import Loading from "./components/Loading";
import { Column } from "./components/flex";
import EditUser from "./components/EditUser";
import { Observer } from "mobx-react-lite/";

const App = () => {
  const { currentUserStore } = useStores();
  return (
    <div className="App">
      <header className="App-header">
        <Observer>
          {() =>
            currentUserStore.initialized &&
            currentUserStore.currentUser != null ? (
              <Column>
                <DisplayUser
                  user={currentUserStore.currentUser}
                  onRefresh={currentUserStore.refresh}
                  onDelete={currentUserStore.delete}
                />
                <EditUser user={currentUserStore.currentUser} />
              </Column>
            ) : (
              <Loading />
            )
          }
        </Observer>
      </header>
    </div>
  );
};

export default App;
