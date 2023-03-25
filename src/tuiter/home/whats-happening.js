import React, {useState} from "react";
import {createTuit} from "../tuits/tuits-reducer";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {

    const dispatch = useDispatch();

    let [whatsHappening, setWhatsHappening] = useState('');

    const tuitClickHandler = () => {
        const newTuit = {
            tuit: whatsHappening,
            topic: "DAM"
        }
        dispatch(createTuit(newTuit));
    }
    return (
        <div className="row px-1 mt-2">
            <div className="col-auto">
                <img src="/images/onga.jpg" className='rounded-circle' width={60}/>
            </div>
            <div className="col-10">
               <textarea value={whatsHappening} placeholder="What's happening?"
                         className="form-control border-0"
                         onChange={(event) => setWhatsHappening(event.target.value)}>
                </textarea>
                <div>
                    <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                            onClick={tuitClickHandler}>
                        Tuit
                    </button>
                    <div className="text-primary fs-3 d-flex justify-content-between w-50 pt-1">
                        <i className="bi bi-card-image"></i>
                        <i className="bi bi-filetype-gif"></i>
                        <i className="bi bi-bar-chart"></i>
                        <i className="bi bi-emoji-smile"></i>
                        <i className="bi bi-geo-alt"></i>
                    </div>
                </div>
            </div>
            <div className="col-12"><hr className='border-solid border-dark'/></div>
        </div>
    );
}
export default WhatsHappening;