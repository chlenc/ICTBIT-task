import UserModel, { TCreateUserData } from "../models/User.model";
import { action, observable, runInAction } from "mobx";
import axios from "axios";
import RootStore from "./RootStore";

export default class CurrentUserStore {
  public rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable currentUser: UserModel | null = null;
  @observable initialized: boolean = false;

  @action sync = async (createUserData?: TCreateUserData) => {
    if (createUserData != null) {
      runInAction(() => {
        this.currentUser = new UserModel(createUserData);
        this.initialized = true;
      });
    } else {
      await this.refresh();
    }
  };

  @action refresh = async () => {
    this.initialized = false;
    const raw = (await axios.get("https://randomuser.me/api/")).data.results[0];
    const user = new UserModel({
      name: raw.name.first,
      age: raw.dob.age,
      gender: raw.gender,
      city: raw.location.country + " " + raw.location.city,
      photoUrl: raw.picture.medium,
    });

    runInAction(() => {
      this.currentUser = user;
      this.initialized = true;
    });
  };
  @action delete = async () => {
    this.currentUser = new UserModel({});
  };
}
