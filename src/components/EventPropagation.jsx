const Propagation = () => {

    const grand_parent = () => {
        console.log("grand parent div clicked");
    }

    const parent = () => {
        console.log("parent div clicked");
    }

    const child = (Event) => {
        console.log(Event)
        Event.stopPropagation()
        console.log("child div clicked");
    }

    return(
        <section className="main border-spacing-5 fixed top-96 left-60">
            <div className="g-div bg-gray-400 flex w-80 h-60 ml-80 justify-center" onClickCapture={grand_parent}>
                <div className="p-div bg-orange-400 w-60 h-40 flex m-10 justify-center " onClickCapture={parent}>
                    <button className="c-div w-40 h-20 m-10" onClickCapture={child}>
                        Child div
                    </button>
                </div>
            </div>
        </section>
    );
};
export default Propagation