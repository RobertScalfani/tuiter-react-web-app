import React from "react";
import '../profile/index.css'
import './index.css'
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {updateBio, updateWebsite, updateLocation, updateBirthDate, updateFirstName, updateLastName} from "../reducers/profile-reducer";

const EditProfile = () => {

    const navigate = useNavigate();

    // Redux state.
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile)

    // Temporary local state.
    const [firstName, setFirstName] = React.useState(profile.firstName);
    const [lastName, setLastName] = React.useState(profile.lastName);
    const [bio, setBio] = React.useState(profile.bio);
    const [website, setWebsite] = React.useState(profile.website);
    const [profileLocation, setProfileLocation] = React.useState(profile.location);
    const [birthDate, setBirthDate] = React.useState(profile.dateOfBirth);
    const [editingBirthDate, setEditingBirthDate] = React.useState(false);

    function updateProfile() {
        // Update the profile state.
        dispatch(updateFirstName(firstName));
        dispatch(updateLastName(lastName));
        dispatch(updateBio(bio));
        dispatch(updateWebsite(website));
        dispatch(updateLocation(profileLocation));
        dispatch(updateBirthDate(birthDate));
        navigate('/tuiter/profile');
    }

    return(
        <div className="text-black border rounded">
            <div className='d-flex align-items-center my-1'>
                <Link to='/tuiter/profile' className='ms-3 me-4'>
                    <i className="text-black bi bi-x" style={{fontSize: '30px'}}></i>
                </Link>
                <div className='d-flex justify-content-between align-items-center w-100'>
                    <h3 className='m-0 p-0'>
                        Edit Profile
                    </h3>
                    <button className='btn btn-dark rounded-pill me-2' onClick={updateProfile}>
                        Save
                    </button>
                </div>
            </div>

            <div className="position-relative mb-5">
                <div className='img-container z-top bg-dark bg-opacity-75'>
                    <img className='w-100 bg-image' src={process.env.PUBLIC_URL + '/images/' + profile.bannerPicture}/>
                    <div className='img-overlay d-flex justify-content-center align-items-center'>
                        <div className="rounded-circle bg-dark bg-opacity-50 d-flex align-items-center justify-content-center mx-2" style={{width: "50px", height: "50px"}}>
                            <i className="bi bi-camera text-light"></i>
                        </div>
                        <div className="rounded-circle bg-dark bg-opacity-50 d-flex align-items-center justify-content-center mx-2" style={{width: "50px", height: "50px"}}>
                            <i className="bi bi-x text-light"></i>
                        </div>
                    </div>
                </div>
                <div className='img-container position-absolute move-avatar' style={{width: "100px", height: "100px"}}>
                    <img className="rounded-circle w-100 h-100 border border-white border-2"  src={process.env.PUBLIC_URL + '/images/' + profile.profilePicture}/>
                    <div className='img-overlay d-flex justify-content-center align-items-center'>
                        <div className="rounded-circle bg-dark bg-opacity-50 d-flex align-items-center justify-content-center mx-2" style={{width: "50px", height: "50px"}}>
                            <i className="bi bi-camera text-light"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-3 mb-3'>
                <form>
                    <div className="form-group">
                        <small className="form-text text-muted">
                            Edit First Name
                        </small>
                        <input type="text" className="form-control" placeholder={profile.firstName} onChange={(event) => setFirstName(event.target.value)}/>
                    </div>
                    <div className="form-group">
                        <small className="form-text text-muted">
                            Edit Last Name
                        </small>
                        <input type="text" className="form-control" placeholder={profile.lastName} onChange={(event) => setLastName(event.target.value)}/>
                    </div>
                    <div className="form-group">
                        <small className="form-text text-muted">
                            Edit Bio
                        </small>
                        <textarea type="text" className="form-control" placeholder={profile.bio} onChange={(event) => setBio(event.target.value)} style={{height: "100px"}}/>
                    </div>
                    <div className="form-group">
                        <small className="form-text text-muted">
                            Edit Location
                        </small>
                        <input type="text" className="form-control" placeholder={profile.location} onChange={(event) => setProfileLocation(event.target.value)}/>
                    </div>
                    <div className="form-group">
                        <small className="form-text text-muted">
                            Edit Website
                        </small>
                        <input type="text" className="form-control" placeholder={profile.website} onChange={(event) => setWebsite(event.target.value)}/>
                    </div>
                    <div className="form-group">
                        <button type="button" className='btn p-0 m-0' onClick={() => setEditingBirthDate(true)}>
                            <small className="form-text text-muted mt-5">
                                Birthdate -
                            </small>
                            <small className="form-text text-primary">
                                &nbsp;Edit
                            </small>
                        </button>
                        {editingBirthDate ?
                            <input type="text" className="form-control" placeholder={profile.dateOfBirth} onChange={(event) => setBirthDate(event.target.value)}/>
                            : <div>{profile.dateOfBirth}</div>}
                    </div>
                </form>
            </div>

        </div>
    );
};
export default EditProfile;