import { useState } from "react";

export const State = () => {
    console.log("ChildComponent render");
    const [count, setCount] = useState(0);

    const inc = () => {
        setCount(count + 1);
    };

    return (
        <>
            <div className="main-div">
                <h1>{count}</h1>
                <button onClick={inc} className="bg-lime-500 p-5">Increment</button>
            </div>
            <ChildComp />
            <Sibling />
        </>
    );
};

export const ChildComp = ({count}) => {
    console.log("ChildComponent render");
    return (
        <div className="main-div">
            <h2>Child Component {count} </h2>
        </div>
    );
};

function Sibling({count}) {
    // console.log("ChildComponent render");
    return (
        <div className="main-div">
            <h2>Sibling Component <h1>{count}</h1> </h2>
        </div>
    );
};