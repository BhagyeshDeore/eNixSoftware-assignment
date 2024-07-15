import { Alert, Button } from "react-bootstrap";
import '../styles/Action.css';

export default function Action() {
  return (
    <div>
      <div className="text-center">
        <Alert key={"info"} variant={"info"}>Action</Alert>
      </div>
      <div className="actionContainer">
        <div>
          <Button variant="warning">Edit</Button>
        </div>
        <br />
        <div>
          <Button variant="danger">Delete</Button>
        </div>
      </div>
    </div>
  );
}
