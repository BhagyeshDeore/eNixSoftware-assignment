import { ReactElement } from "react";
import MainUI from "./Components/MainUI";

// async function fetchUsers(): Promise<User[]> {
//   try {
   
//     const response = await axios.get('#'); 
//     return response.data;
//   } catch (error) {
//     console.error("Failed to fetch users:", error);
//     return [];
//   }
// }

async function fetchUsers() {
  return [
    {
      "id": 1,
      "name": "Aarav Sharma",
      "dob": "1985-04-15",
      "address": "789 Maple St, New Delhi, DL",
      "gender": "Male",
      "email": "aarav.sharma@example.com",
      "mobileNo": 9123456789,
      "linkedinId": "https://linkedin.com/in/aaravsharma",
      "githubProfile": "https://github.com/aaravsharma"
    },
    {
      "id": 2,
      "name": "Anaya Kapoor",
      "dob": "1992-07-23",
      "address": "123 Oak St, Mumbai, MH",
      "gender": "Female",
      "email": "anaya.kapoor@example.com",
      "mobileNo": 9876543210,
      "linkedinId": "https://linkedin.com/in/anayakapoor",
      "githubProfile": "https://github.com/anayakapoor"
    },
    {
      "id": 3,
      "name": "Vihaan Mehta",
      "dob": "1990-11-30",
      "address": "456 Pine St, Bangalore, KA",
      "gender": "Male",
      "email": "vihaan.mehta@example.com",
      "mobileNo": 9765432109,
      "linkedinId": "https://linkedin.com/in/vihaanmehta",
      "githubProfile": "https://github.com/vihaanmehta"
    },
    {
      "id": 4,
      "name": "Saanvi Singh",
      "dob": "1988-03-10",
      "address": "321 Birch St, Hyderabad, TS",
      "gender": "Female",
      "email": "saanvi.singh@example.com",
      "mobileNo": 9654321098,
      "linkedinId": "https://linkedin.com/in/saanvisingh",
      "githubProfile": "https://github.com/saanvisingh"
    },
    {
      "id": 5,
      "name": "Ishaan Gupta",
      "dob": "1995-05-05",
      "address": "654 Cedar St, Chennai, TN",
      "gender": "Male",
      "email": "ishaan.gupta@example.com",
      "mobileNo": 9543210987,
      "linkedinId": "https://linkedin.com/in/ishaangupta",
      "githubProfile": "https://github.com/ishaangupta"
    }
  ]

}

const Home = async (): Promise<ReactElement> => {
  const users = await fetchUsers();

  return (
    <div>
      <MainUI users={users} /> 
    </div>
  );
};

export default Home;
