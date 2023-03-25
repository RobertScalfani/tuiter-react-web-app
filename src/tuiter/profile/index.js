import React from "react";
import './index.css'
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const ProfileComponent = () => {

    const profile = useSelector(state => state.profile)

    return(
        <div className="text-black border rounded">
            <div className='d-flex ps-2 pt-1 align-items-center'>
                <i className="bi bi-arrow-left ms-3 me-4" style={{fontSize: '20px'}}></i>
                <div>
                    <h3 className='mb-0'>
                        {profile.firstName} {profile.lastName}
                    </h3>
                    <div className='text-muted pb-1'>
                        {profile.tuitCount} Tuits
                    </div>
                </div>
            </div>

            <div className="position-relative">
                <img className='w-100' src={process.env.PUBLIC_URL + '/images/' + profile.bannerPicture}/>
                <img className="rounded-circle position-absolute move-avatar  border border-white border-2" style={{width: "100px", height: "100px"}} src={process.env.PUBLIC_URL + '/images/' + profile.profilePicture}/>
            </div>

            <div className='mx-3 mb-3'>
                <div className='d-flex justify-content-end my-2'>
                    <Link to='/tuiter/edit-profile' className='btn btn-outline-primary rounded-pill justify-content-center'>
                        Edit Profile
                    </Link>
                </div>
                <h4 className={'mb-0'}>
                    {profile.firstName} {profile.lastName}
                </h4>
                <div className='text-muted mb-2'>
                    @{profile.handle}
                </div>
                <div>
                    {profile.bio}
                </div>
                <div className='d-flex text-muted justify-content-start mt-2'>
                    <div className='pe-3'>
                        <i className="bi bi-geo-alt"></i>
                        &nbsp;{profile.location}
                    </div>
                    <div className='pe-3'>
                        <i className="bi bi-balloon"></i>
                        &nbsp;Born {profile.dateOfBirth}
                    </div>
                    <div>
                        <i className="bi bi-calendar-event"></i>
                        &nbsp;Joined {profile.dateJoined}
                    </div>
                </div>
                <div className='pt-2 text-muted'>
                    <span className='fw-bold'>
                        {profile.followingCount}
                    </span>
                    <span>
                        &nbsp;Following
                    </span>
                    <span className='fw-bold'>
                        &nbsp;&nbsp;&nbsp;{profile.followersCount}
                    </span>
                    <span>
                        &nbsp;Followers
                    </span>
                </div>
            </div>

        </div>
    );
};
export default ProfileComponent;