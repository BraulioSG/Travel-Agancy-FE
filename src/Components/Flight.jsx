import './Flight.scss';
function Flight(props) {
    const { Destiny, airline, Price } = props;
    const selectFlight = evt => {
        
    };
    return ( 
        <> 
            <div onClick={selectFlight}>  
                <div className="">
                    <div className="">
                        <span className="">{}</span>
                    </div>
                    <div className="">
                        <h2>{}</h2>
                    </div>
                    <div className="">{}</div>
                </div>
            </div>
        </>
    );
}

export default Flight;
