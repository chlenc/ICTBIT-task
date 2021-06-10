import styled from "@emotion/styled";
import React from "react";
import UserModel from "../models/User.model";
import { Avatar } from "./Avatar";
import { Column, Row } from "./flex";
import { Button } from "./Button";
import { Observer } from "mobx-react-lite";

interface IProps {
  user: UserModel;
  onRefresh: () => void;
  onDelete: () => void;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 250px;
  width: 250px;
  font-size: 14px;
  padding: 16px;
  box-sizing: border-box;
  border: 1px solid #fff;
  border-radius: 5px;
  & > * {
    margin: 5px 0;
  }
`;

const DisplayUser: React.FC<IProps> = ({ user, onRefresh, onDelete }) => (
  <Observer>
    {() => (
      <Root>
        <Row>
          <Avatar src={user.photoUrl} style={{ marginRight: 5 }} />
          <Column justifyContent="space-between">
            <div>{user.name}</div>
            <div>{user.username}</div>
          </Column>
        </Row>
        <Row>
          <span style={{ width: 80, textAlign: "start" }}>City:</span>
          <span>{user.city}</span>
        </Row>
        <Row>
          <span style={{ width: 80, textAlign: "start" }}>Age:</span>
          <span>{user.age}</span>
        </Row>
        <Row>
          <span style={{ width: 80, textAlign: "start" }}>Gender:</span>
          <span>{user.gender}</span>
        </Row>
        <Row justifyContent="space-between">
          <Button onClick={onRefresh} style={{ width: "45%" }}>
            Refresh
          </Button>
          <Button
            onClick={onDelete}
            style={{ width: "45%", background: "red", color: "#fff" }}
          >
            Delete
          </Button>
        </Row>
      </Root>
    )}
  </Observer>
);
export default DisplayUser;
