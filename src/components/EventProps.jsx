// import React from 'react'

export const EventProps = () => {
    const HandleWelcomeUser = (user) => {
        alert(`Hey, ${user}`);
    }
    const handleHower = () => {
        alert("Hey thanks for hovering me");
    }
  return (
    <>
        <WelcomeUser 
            onClick={() => HandleWelcomeUser("Sampark")} 
            onMouseEnter={() => handleHower("Handle Hower")}
            />
    </>
  );
};

const WelcomeUser = ({onClick, onMouseEnter}) => {
    const handleGreetings = () => {
        console.log("Hey User Welcome");
        onClick();
    }
    return(
        <>
        <hr />
            <button className='bg-yellow-400 my-5 mx-5' onClick={onClick}>Click Me </button> <br /><br />
            {/* <button className='bg-yellow-500 mx-5' onMouseEnter={onMouseEnter}>Hover Me </button> &nbsp; */}
            <button className='bg-yellow-700' onClick={handleGreetings}>Greeting</button>  &nbsp;
        </>
    )
}
