export const EventHandling = (event) => {
        console.log(event)
        console.log(event.target)
        console.log(event.type)
    const handleButtonClick = (user) => {
       
        alert(`Hey ${user} Welcome`);
    }

    return (
        <>
            {/* <button className="border-none btn-danger" onClick={handleButtonClick}>Click Me</button> <br /><br /> */}
            <button className="border-none mx-5" onClick={()=>handleButtonClick("roman")}>Click Me 2</button><br /><br />
        </>
    )
}
//? export default EventHandling