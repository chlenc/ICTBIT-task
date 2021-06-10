import { CurrentUserStore } from "./index";
import { computed } from "mobx";

export default class RootStore {
  public currentUserStore: CurrentUserStore;

  constructor(initState?: any) {
    this.currentUserStore = new CurrentUserStore(this);
    Promise.all([
      this.currentUserStore.sync(initState?.currentUserStore?.currentUser),
    ]).then();
    console.log(this);
  }

  @computed get initialized() {
    return this.currentUserStore.initialized;
  }

  public serialize = () => ({
    currentUserStore: {
      currentUser: this.currentUserStore.currentUser?.serialized,
    },
  });
}
