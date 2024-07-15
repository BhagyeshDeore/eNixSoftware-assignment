"use client";
import { Alert } from "react-bootstrap";
import "../styles/UserList.css"; 
import { User } from "./User";

interface UserListProps {
  users: User[];
  onSelectUser: (user: User) => void;
}

export default function UserList({ users, onSelectUser }: UserListProps) {
  return (
    <div>
      <div className="text-center">
        <Alert key={"info"} variant={"info"}>
          User List
        </Alert>
      </div>
      <div className="userListContainer">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} onClick={() => onSelectUser(user)} style={{ cursor: 'pointer' }}>
              <td>{user.id}</td>
              <td>{user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}
