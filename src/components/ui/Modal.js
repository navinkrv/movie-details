
const Modal=(props)=>{
    // console.log(props.data.show.schedule.days);
    return(
        <div className="modal">
            <div className="formContainer">
                    <h3 >Book Your Seat</h3>
                <form>
                    <input type="disabled" value={props.data.show.name} />
                    <input type="text" placeholder="Enter Name"/>
                    <input type="text" placeholder="Enter Age"/>
                    <input type="number" placeholder="Enter Mobile Number"/>
                    <input type="disabled" value={props.data.show.schedule.time.toString()} />
                   
                    <button className="btn-buy">Buy</button>
                    <button className=" btn-buy close" onClick={()=>{props.action("")}}>
                        close
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Modal;