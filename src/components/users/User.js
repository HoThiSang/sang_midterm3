import axios from "axios";
import React, {Fragment, useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import Repos from "../repos/Repos"

const User = () => {
    const { id } = useParams();
    const [user, setUser] = useEffect();
    const [repos, setRepos ] = useState([]);

    const getUser = async (username) => {
        try{
            const response = await axios.get(
            `https://api.github.com/users/${username}`
            )
            const data = response.data
            setUser(data)
        }catch(error){
            console.error("Error fetching data:", error.message)
        }
    };
    const getUserRepos = async (id) => {
        // To be completed ...
        // This is the small exercise for students
        // Students will write the code to fetch the user's repositories
        // Then display the repositories in the User component
        };

    useEffect(()=>{
        getUser(id);
        getUserRepos(id);
    }, []);

    const {
        name,
        avatar_url, 
        location,
        bio,
        login, 
        html_url, 
        followers, 
        following,
        public_repos,
        public_gists,
        hireable,
    } = user;

    return (
        <Fragment>
            <Link to='/' className="btn btn-light">
                Back to Search
            </Link>
            Hireable: {hireable ? (
            <i className="fas fa-check text-success" />
            ): (
            <i className="fas fa-times-circle text-danger" />
            )}
            <div className="card grid-2">
            <div className="all-center">
            <img 
                src={avatar_url}
                alt={name}
                className="round-img"
                style={{ width:"150px" }}
            />
            <h1>{name}</h1>
            <p>{location}</p>
        </div>
        </div>
       <div>
        {bio && (
            <Fragment>
                <h3>Bio:</h3>
                <p>{bio}</p>
            </Fragment>
        )}
        <a 
            href={html_url}
            className="btn btn-dark my-1"
            target="_blank"
            rel="nooperer noreferrer"
        >
        </a>
        <ul>
            <li>
                
            </li>
        </ul>
       </div> 
        </Fragment>
    )
}