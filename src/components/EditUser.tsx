import styled from "@emotion/styled";
import React from "react";
import { Observer } from "mobx-react-lite";
import UserModel, { GENDER_TYPES, TGender } from "../models/User.model";
import { Row } from "./flex";

interface IProps {
  user: UserModel;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  & > * {
    margin: 5px 0;
  }
`;

const EditUser: React.FC<IProps> = ({ user }) => (
  <Observer>
    {() =>
      user != null ? (
        <Root>
          <FromRow title="Name">
            <input
              value={user.name ?? ""}
              onChange={(e) => (user.name = e.target.value)}
            />
          </FromRow>
          <FromRow title="Age">
            <input
              type="number"
              value={user.age ?? ""}
              onChange={(e) =>
                !isNaN(+e.target.value) && (user.age = +e.target.value)
              }
            />
          </FromRow>
          <FromRow title="Gender">
            <select
              style={{ width: 153 }}
              value={user.gender ?? ""}
              onChange={(e) => (user.gender = e.target.value as TGender)}
            >
              <option />
              <option>{GENDER_TYPES.MALE}</option>
              <option>{GENDER_TYPES.FEMALE}</option>
            </select>
          </FromRow>
          <FromRow title="City">
            <input
              value={user.city ?? ""}
              onChange={(e) => (user.city = e.target.value)}
            />
          </FromRow>
          <FromRow title="Photo url">
            <input
              value={user.photoUrl ?? ""}
              onChange={(e) => (user.photoUrl = e.target.value)}
            />
          </FromRow>
        </Root>
      ) : null
    }
  </Observer>
);

const FromRow: React.FC<{ title: string }> = ({ title, children }) => (
  <Row
    alignItems="center"
    justifyContent="space-between"
    style={{ fontSize: 14, width: "100%" }}
  >
    <div>{title}</div>
    {children}
  </Row>
);

export default EditUser;
