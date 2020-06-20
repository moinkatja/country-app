import React from 'react';

const Country = (props) => (
    <div className="country-info">
        {
            props.name && <p> <b>Country Name: </b><span>{props.name}</span></p>
        }
        {
            props.population && <p> <b>Population:</b> <span>{props.population} people</span></p>
        }
        {
            props.region && <p> <b>Region: </b><span>{props.region}</span></p>
        }
        {
            props.capital && <p> <b>Capital: </b><span>{props.capital}</span></p>
        }
        {
            props.flag && <p > <span><img className="flag-img" src={props.flag} alt="Flag"></img></span></p>
        }

        {
            props.error && <p><span>{props.error}</span></p>
        }
 
    </div>
);

export default Country;