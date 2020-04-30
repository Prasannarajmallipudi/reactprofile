import React from 'react';
import './App.css';
import Data from './data/data.json';

class Profile extends React.Component{
    render(){
        var indexValue=this.props.location.data.id;
        var specificProfile=Data.profiles[indexValue];
        return(
            <section className="parent">
                <div className="card"> 
                    <div className="card-top">
        <h3> {specificProfile.basicInformation.name} </h3>
    <em> {specificProfile.basicInformation.email} </em>
                     </div>

                     <div className="card-bottom">
<a href={"mailto:"+specificProfile.basicInformation.email}> {specificProfile.basicInformation.email}  </a> 

<a href={"tel:"+specificProfile.basicInformation.mobile}> {specificProfile.basicInformation.mobile}</a>
                     </div>
                
                </div>

                <div className="card2">
                    <div className="card-bottom">
                        <h2> Educational Qualifications</h2>
                    </div>

                    <div className="card-top">
                        {specificProfile.education.map((i,j)=>(
                        <ul>
                            <li> {i.degree} </li>
                        <p> {i.institution} </p>
                        </ul>
                        ))}
                    </div>
                </div>
            </section>
        )
    }
}

export default Profile;