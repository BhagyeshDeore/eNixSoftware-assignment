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
      id: 1,
      name: "Aarav Sharma",
      dob: "1985-04-15",
      address: "789 Maple St, New Delhi, DL",
      gender: "Male",
      email: "aarav.sharma@example.com",
      mobileNo: 9123456789,
      linkedinId: "https://linkedin.com/in/aaravsharma",
      githubProfile: "https://github.com/aaravsharma",
      education: [
        { level: "Bachelor's", institute: "NBN Sinhgad School of Engineering, Pune" },
        { level: "Diploma", institute: "G.H. Raisoni Polytechnic" },
        { level: "10th", institute: "RR Vidyalaya, Jalgaon" }
      ]
    },
    {
      id: 2,
      name: "Priya Gupta",
      dob: "1990-06-20",
      address: "45 Park Lane, Bangalore, KA",
      gender: "Female",
      email: "priya.gupta@example.com",
      mobileNo: 9876543210,
      linkedinId: "https://linkedin.com/in/priyagupta",
      githubProfile: "https://github.com/priyagupta",
      education: [
        { level: "Bachelor's", institute: "Bangalore Institute of Technology" },
        { level: "Master's", institute: "IISc Bangalore" },
        { level: "12th", institute: "St. Joseph's School, Bangalore" }
      ]
    },
    {
      id: 3,
      name: "Rahul Verma",
      dob: "1988-03-15",
      address: "123 Elm St, Mumbai, MH",
      gender: "Male",
      email: "rahul.verma@example.com",
      mobileNo: 9123456788,
      linkedinId: "https://linkedin.com/in/rahulverma",
      githubProfile: "https://github.com/rahulverma",
      education: [
        { level: "Bachelor's", institute: "SVKM's Narsee Monjee Institute of Management Studies" },
        { level: "10th", institute: "Don Bosco High School, Mumbai" }
      ]
    },
    {
      id: 4,
      name: "Sneha Desai",
      dob: "1995-11-12",
      address: "67 Sea View Road, Chennai, TN",
      gender: "Female",
      email: "sneha.desai@example.com",
      mobileNo: 9123456787,
      linkedinId: "https://linkedin.com/in/snehadesai",
      githubProfile: "https://github.com/snehadesai",
      education: [
        { level: "Bachelor's", institute: "Anna University" },
        { level: "12th", institute: "Holy Angels School, Chennai" }
      ]
    },
    {
      id: 5,
      name: "Vikram Singh",
      dob: "1992-09-25",
      address: "32 Green Valley, Kolkata, WB",
      gender: "Male",
      email: "vikram.singh@example.com",
      mobileNo: 9123456786,
      linkedinId: "https://linkedin.com/in/vikramsingh",
      githubProfile: "https://github.com/vikramsingh",
      education: [
        { level: "Bachelor's", institute: "Jadavpur University" },
        { level: "Diploma", institute: "Kolkata Polytechnic" },
        { level: "10th", institute: "DPS Ruby Park, Kolkata" }
      ]
    }
  ];

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
