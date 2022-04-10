import ReactDOM from "react-dom";
import React, {useEffect, useState} from "react";
import {getUser, saveUserData} from "../../store/actions/UserActions";
import store from "../../store/store";
import {connect} from "react-redux";
import {Route} from "react-router-dom";


function EditProfile({ userState, getUser, saveUserData,userid}){
    useEffect(()=> {
        getUser(userid)
    },[])


    //setFormState(userState);
    const handleSubmit = (e) => {
        e.preventDefault();

        userState.users.first_name = e.target.firstname.value
        userState.users.last_name = e.target.lastname.value
        userState.users.email = e.target.email.value
        userState.users.birthday = e.target.birthday.value
        userState.users.current_weight = e.target.currentweight.value
        userState.users.rest_heart_rate = e.target.hrate.value
        userState.users.phone = e.target.phone.value

        saveUserData(userState.users);


    }

    return userState.loading?(
        <h2>Loading</h2>
    ): userState.error? (
        <h2>{userState.error}</h2>
    ): (
            <div className="container sizing-profile">


                        <div className="card shadow-sm">
            <form className="form-control" action="" onSubmit={(handleSubmit)}>
                <div className="form-group">
                    <label className="form-input-label">First Name</label>
                    <input
                        type="text"

                        className="form-input-block"
                        id='firstname'
                        placeholder= {userState.users.first_name}
                    />
                    <label className="form-input-label">Last Name</label>
                    <input
                        type="text"

                        className="form-input-block"
                        id='lastname'
                        placeholder= {userState.users.last_name}
                    />
                    <label className="form-input-label">Email</label>
                    <input
                        type="email"

                        className="form-input-block"
                        id='email'
                        placeholder= {userState.users.email}
                    />
                    <label className="form-input-label">Birthdate</label>
                    <input
                        type="date"

                        className="form-input-block"
                        id='birthday'
                        placeholder= {userState.users.birthday}
                    />

                    <label className="form-input-label">Weight</label>
                    <input
                        type="number"
                        className="form-input-block"
                        id='currentweight'
                        placeholder= {userState.users.current_weight}
                    />

                <label className="form-input-label">Phone</label>
                <input
                    type="text"
                    className="form-input-block"
                    id='phone'
                    placeholder= {userState.users.phone}
                />
                    <label className="form-input-label">Resting Heart Rate</label>
                    <input
                        type="text"
                        className="form-input-block"
                        id='hrate'
                        placeholder= {userState.users.resting_heart_rate}
                    />
                        </div>

                <button className="btn-primary create-treatment-button" type={"submit"} >Submit</button>


            </form>
        </div>



        </div>

    )
}



const mapStateToProps = state => {
    return {
        userState: state.user
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        getUser: (userid) => dispatch(getUser(userid)),
       saveUserData: () => dispatch(saveUserData(store.getState().user.users))

    }
}

if (document.getElementById('editprofileoutput')) {
    ReactDOM.render(<EditProfile userid = {userid}/>, document.getElementById('editprofileoutput'));
}
export default connect(mapStateToProps,mapDispatchToProps)(EditProfile)
