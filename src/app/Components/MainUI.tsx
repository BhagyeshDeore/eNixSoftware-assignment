"use client";
import { useEffect, useState } from "react";
import UserDetails from "./UserDetails";
import UserList from "./UserList";
import Action from "./Action";
import { Col, Row } from "react-bootstrap";
import { User } from "./User";

interface MainUIProps {
  users: User[];
}

const MainUI = ({ users }: MainUIProps) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(users.length > 0 ? users[0]:null);

  // useEffect(() => {
  //   if (users.length > 0) {
  //     setSelectedUser(users[0]); 
  //   }
  // }, [users]);

  const handleSelectUser = (user: User) => {
    setSelectedUser(user);
  };

  return (
    <>
      <Row>
        <Col lg="3">
          <UserList users={users} onSelectUser={handleSelectUser} />
        </Col>
        <Col lg="7">
          {selectedUser ? <UserDetails user={selectedUser} /> : <p>No user selected</p>}
        </Col>
        <Col lg="2">
          <Action />
        </Col>
      </Row>
    </>
  );
};

export default MainUI;
