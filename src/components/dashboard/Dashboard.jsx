// // import React from "react";
// import React, { useState, useEffect } from "react";
// const Dashboard=()=>{
//   const [Repositories, setRepositories] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [suggestedRepositories, setSuggestedRepositories] = useState([]);
//   const [searchResults, setSearchResults] = useState([]);
//   useEffect(() => {
//     const userId = localStorage.getItem("userId");

//     const fetchRepositories = async () => {
      
//         const response = await fetch(
//           `http://localhost:8000/repo/user/${userId}`
//         );
//         const data = await response.json();
//         // setRepositories(data.Repositories);
//         console.log(data);
 
//     };
//     fetchRepositories();
// },[]);
// return(
//   <h1>dashboard</h1>
// )
// }
// // export default Dashboard;
// export default Dashboard;
import React, { useState, useEffect, useContext } from "react";
import "./dashboard.css";
import axios from "axios";
import Navbar from "../Navbar";
import { AuthContext } from "../../authContext";

const Dashboard = () => {
  const [Repositories, setRepositories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestedRepositories, setSuggestedRepositories] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const {currentUser}=useContext(AuthContext);

  useEffect(() => {
    // const userId = localStorage.getItem("userId");

    // const fetchRepositories = async () => {
    //   try {
    //     const response = await axios.get(
    //       `http://localhost:8000/repo/user/${currentUser}`
    //     );
    //     console.log("Fetched User Repositories:", response.data); // Debugging
    //     // if ( Array.isArray(response.data)) {
    //     //   setRepositories(response.data); // Ensure it sets the correct property
    //     // } else {
    //     //   console.error("No Repositories found for the user.");
    //     // }
    //   } catch (err) {
    //     console.error("Error while fetching Repositories:use ", err);
    //   }
    // };

    const fetchSuggestedRepositories = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/repo/all`);
        console.log("Fetched Suggested Repositories:", response); // Debugging
        if (Array.isArray(response)) { // Correctly checks if data is an array
          setSuggestedRepositories(response);
        } else {
          console.error("Invalid data format for suggested Repositories.");
        }
      } catch (err) {
        console.error("Error while fetching Repositories: sugges", err);
      }
    };

    // fetchRepositories();
    fetchSuggestedRepositories();
  }, []);

  // useEffect(() => {
  //   if (searchQuery === "") {
  //     setSearchResults(Repositories);
  //   } else {
  //     const filteredRepo = Repositories.filter((repo) =>
  //       repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  //     );
  //     setSearchResults(filteredRepo);
  //   }
  // }, [searchQuery, Repositories]);

  return (
    <>
    <Navbar/>
      <section id="dashboard">
        <aside>
          <h3>Suggested Repositories</h3>
          {suggestedRepositories.length > 0 ? (
            suggestedRepositories.map((repo) => (
              <div key={repo._id}>
                <h4>{repo.name}</h4>
                <p>{repo.description}</p>
              </div>
            ))
          ) : (
            <p>No suggested Repositories found.</p>
          )}
        </aside>
        <main>
          <h2>Your Repositories</h2>
          <div id="search">
            <input
              type="text"
              value={searchQuery}
              placeholder="Search..."
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          {searchResults.length > 0 ? (
            searchResults.map((repo) => (
              <div key={repo._id}>
                <h4>{repo.name}</h4>
                <p>{repo.description}</p>
              </div>
            ))
          ) : (
            <p>No Repositories found.</p>
          )}
        </main>
        <aside>
          <h3>Upcoming Events</h3>
          <ul>
            <li>
              <p>Tech Conference - Dec 15</p>
            </li>
            <li>
              <p>Developer Meetup - Dec 25</p>
            </li>
            <li>
              <p>React Summit - Jan 5</p>
            </li>
          </ul>
        </aside>
      </section>
    </>
  );
};

export default Dashboard;



// import Navbar from "../Navbar";

// const Dashboard = () => {
//   const [Repositories, setRepositories] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [suggestedRepositories, setSuggestedRepositories] = useState([]);
//   const [searchResults, setSearchResults] = useState([]);

//   useEffect(() => {
//     const userId = localStorage.getItem("userId");

//     const fetchRepositories = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:8000/repo/user/${userId}`
//         );
//         const data = await response.json();
//         setRepositories(data.Repositories);
//       } catch (err) {
//         console.error("Error while fecthing Repositories: ", err);
//       }
//     };

//     const fetchSuggestedRepositories = async () => {
//       try {
//         const response = await fetch(`http://localhost:8000/repo/all`);
//         const data = await response.json();
//         setSuggestedRepositories(data);
//         console.log(suggestedRepositories);
//       } catch (err) {
//         console.error("Error while fecthing Repositories: ", err);
//       }
//     };

//     fetchRepositories();
//     fetchSuggestedRepositories();
//   }, []);

//   useEffect(() => {
//     if (searchQuery == "") {
//       setSearchResults(Repositories);
//     } else {
//       const filteredRepo = Repositories.filter((repo) =>
//         repo.name.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//       setSearchResults(filteredRepo);
//     }
//   }, [searchQuery, Repositories]);

//   return (
//     <>
//       {/* <Navbar /> */}
//       <section id="dashboard">
//         <aside>
//           <h3>Suggested Repositories</h3>
//           {suggestedRepositories.map((repo) => {
//             return (
//               <div key={repo._id}>
//                 <h4>{repo.name}</h4>
//                 <h4>{repo.description}</h4>
//               </div>
//             );
//           })}
//         </aside>
//         <main>
//           <h2>Your Repositories</h2>
//           <div id="search">
//             <input
//               type="text"
//               value={searchQuery}
//               placeholder="Search..."
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </div>
//           {searchResults.map((repo) => {
//             return (
//               <div key={repo._id}>
//                 <h4>{repo.name}</h4>
//                 <h4>{repo.description}</h4>
//               </div>
//             );
//           })}
//         </main>
//         <aside>
//           <h3>Upcoming Events</h3>
//           <ul>
//             <li>
//               <p>Tech Conference - Dec 15</p>
//             </li>
//             <li>
//               <p>Developer Meetup - Dec 25</p>
//             </li>
//             <li>
//               <p>React Summit - Jan 5</p>
//             </li>
//           </ul>
//         </aside>
//       </section>
//     </>
//   );
// };

// export default Dashboard;