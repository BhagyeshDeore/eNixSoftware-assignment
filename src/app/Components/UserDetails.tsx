"use client";
import { useState } from "react";
import { Alert, Button, Col, Row, Table } from "react-bootstrap";
import '../styles/UserDetails.css';
import { User } from "./User";

interface UserDetailsProps {
  user: User; 
}

export default function UserDetails({ user }: UserDetailsProps) {
  const [view, setView] = useState("profile");

  return (
    <div>
      <div className="text-center">
        <Alert key={"info"} variant={"info"}>User Details</Alert>
      </div>
      <div className="userDetailsContainer">
        <Row>
          <Col lg="2">
            <Row>
              <Button variant="primary" onClick={() => setView("profile")}>Profile</Button>
            </Row>
            <br />
            <Row>
              <Button variant="success" onClick={() => setView("contact")}>Contact</Button>
            </Row>
          </Col>
          <Col>
            {view === "profile" ? (
              <Table className="userDetailTable">
                <tbody>
                  <tr>
                    <th>User ID:</th>
                    <td>{user.id}</td>
                  </tr>
                  <tr>
                    <th>Name:</th>
                    <td>{user.name}</td>
                  </tr>
                  <tr>
                    <th>DOB:</th>
                    <td>{user.dob}</td>
                  </tr>
                  <tr>
                    <th>Address:</th>
                    <td>{user.address}</td>
                  </tr>
                  <tr>
                    <th>Gender:</th>
                    <td>{user.gender}</td>
                  </tr>
                </tbody>
              </Table>
            ) : (
              <Table className="userDetailTable">
                <tbody>
                  <tr>
                    <th>Email Address:</th>
                    <td>{user.email}</td>
                  </tr>
                  <tr>
                    <th>Mobile Number:</th>
                    <td>{user.mobileNo}</td>
                  </tr>
                  <tr>
                    <th>LinkedIn:</th>
                    <td>
                      {user.linkedinId ? (
                        <a href={user.linkedinId} target="_blank" rel="noopener noreferrer">{user.linkedinId}</a>
                      ) : (
                        "Not provided"
                      )}
                    </td>
                  </tr>
                  <tr>
                    <th>GitHub Profile:</th>
                    <td>
                      {user.githubProfile ? (
                        <a href={user.githubProfile} target="_blank" rel="noopener noreferrer">{user.githubProfile}</a>
                      ) : (
                        "Not provided"
                      )}
                    </td>
                  </tr>
                </tbody>
              </Table>
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
}
