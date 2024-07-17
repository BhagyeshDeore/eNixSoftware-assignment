"use client";
import { useEffect, useState } from "react";
import { Alert, Button, Col, Row, Table } from "react-bootstrap";
import '../styles/UserDetails.css';
import { User } from "./User";

interface UserDetailsProps {
  user: User;
}

export default function UserDetails({ user }: UserDetailsProps) {
  const [view, setView] = useState("profile");

  useEffect(() => {
    setView("profile");
  }, [user]);

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
            <br />
            <Row>
              <Button variant="info" onClick={() => setView("education")}>Education</Button>
            </Row>
          </Col>
          <Col>
            {view === "profile" && (
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
            )}
            {view === "contact" && (
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
                        <a href={user.linkedinId} target="_blank">{user.linkedinId}</a>
                      ) : (
                        "Not provided"
                      )}
                    </td>
                  </tr>
                  <tr>
                    <th>GitHub Profile:</th>
                    <td>
                      {user.githubProfile ? (
                        <a href={user.githubProfile} target="_blank">{user.githubProfile}</a>
                      ) : (
                        "Not provided"
                      )}
                    </td>
                  </tr>
                </tbody>
              </Table>
            )}
            {view === "education" && (
              <Table className="userDetailTable">
                <thead>
                  <tr>
                    <th>Level of Education</th>
                    <th>Institute</th>
                  </tr>
                </thead>
                <tbody>
                  {user.education.map((edu, index) => (
                    <tr key={index}>
                      <td>{edu.level}</td>
                      <td>{edu.institute}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
}
