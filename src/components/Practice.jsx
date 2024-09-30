// const User = ;

import { useState } from "react";

export const Practice = () => {
    const [User, setUser] = useState([
        {name: "Alice", age: 25},
        {name: "Jolly", age: 18},
        {name: "John", age: 22},
        {name: "Jordan", age: 19},
    ])
    return (
        <div className="main-div">
            <h1>Users List</h1>
            <ul>
                {
                    User.map((curElem, index) => (
                        <li key={index}> {curElem.name} - {curElem.age} year old</li>
                    ))
                }
            </ul>
        </div>
    );
};

// // export default UsersList;
// src/components/practice/Practice.jsx

// const User = [
//     { name: "Alice", age: 25 },
//     { name: "Jolly", age: 18 },
//     { name: "John", age: 22 },
//     { name: "Jordan", age: 19 },
// ];

// export const Practice = () => {
//     useState
//     return (
//         <div className="main-div">
//             <h1>Users List</h1>
//             <ul>
//                 {
//                     User.map((curElem, index) => (
//                         <li key={index}>
//                             {curElem.name} - {curElem.age} years old
//                         </li>
//                     ))
//                 }
//             </ul>
//         </div>
//     );
// };

