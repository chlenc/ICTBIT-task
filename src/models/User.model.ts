import { computed, observable } from "mobx";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";

export type TName = string;
export type TCity = string;
export type TPhotoUrl = string;
export type TAge = number;

export enum GENDER_TYPES {
  MALE = "male",
  FEMALE = "female",
}

export type TGender = GENDER_TYPES;

export type TCreateUserData = {
  name?: TName;
  age?: TAge;
  gender?: TGender;
  city?: TCity;
  photoUrl?: TPhotoUrl;
};

export default class UserModel {
  @observable public name?: TName;
  @observable public age?: TAge;
  @observable public gender?: TGender;
  @observable public city?: TCity;
  @observable public photoUrl?: TPhotoUrl;

  constructor({ name, age, gender, city, photoUrl }: TCreateUserData) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.city = city;
    this.photoUrl = photoUrl;
  }

  @computed get username() {
    return (
      capitalizeFirstLetter(this.name?.substr(0, 10) ?? "") +
      String(this.age ?? "")
    );
  }

  @computed get serialized() {
    return {
      name: this.name,
      age: this.age,
      gender: this.gender,
      city: this.city,
      photoUrl: this.photoUrl,
    };
  }
}
