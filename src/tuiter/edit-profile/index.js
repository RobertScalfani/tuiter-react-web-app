import React from "react";
import '../profile/index.css'
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const EditProfile = () => {

    const profile = useSelector(state => state.profile)

    function updateProfile() {
        // Update the profile state.
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
                    <Link to='/tuiter/profile' className='btn btn-dark rounded-pill me-2' onClick={updateProfile()}>
                        Save
                    </Link>
                </div>
            </div>

            <div className="position-relative mb-5">
                <img className='w-100' src={process.env.PUBLIC_URL + '/images/' + profile.bannerPicture}/>
                <img className="rounded-circle position-absolute move-avatar" style={{width: "100px", height: "100px"}} src={process.env.PUBLIC_URL + '/images/' + profile.profilePicture}/>
            </div>

            <div className='mx-3 mb-3'>
                <form>
                    <div className="form-group">
                        <small className="form-text text-muted">
                            Edit name
                        </small>
                        <input type="text" className="form-control" placeholder={profile.firstName + " " + profile.lastName}/>
                    </div>
                    <div className="form-group">
                        <small className="form-text text-muted">
                            Edit Bio
                        </small>
                        <input type="text" className="form-control" placeholder={profile.bio}/>
                    </div>
                    <div className="form-group">
                        <small className="form-text text-muted">
                            Edit Location
                        </small>
                        <input type="text" className="form-control" placeholder={profile.location}/>
                    </div>
                    <div className="form-group">
                        <small className="form-text text-muted">
                            Edit Website
                        </small>
                        <input type="text" className="form-control" placeholder={profile.website}/>
                    </div>
                    <div className="form-group">
                        <small className="form-text text-muted">
                            Edit Birthdate
                        </small>
                        <input type="text" className="form-control" placeholder={profile.dateOfBirth}/>
                    </div>
                </form>
            </div>

        </div>
    );
};
export default EditProfile;