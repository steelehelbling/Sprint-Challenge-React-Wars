import React from 'react';
import styled from "styled-components";




const Outerbox = styled.div`
opacity: 0.5;
background:red;
margin:20px;

border:white solid 4px;
`;


const Innerbox = styled.div`
color:white;
text-align:center;
padding:30px;

`;


const Headname = styled.h1 `
text-decoration:underline;

`
const Boxsizer = styled.h3 `
padding:5px;

`


const Cardmaker = props => {
    return (

        <Outerbox>
            <Innerbox>
                <Headname>{props.data.name}</Headname>
                <Boxsizer>height: {props.data.height}</Boxsizer>
                <Boxsizer>mass: {props.data.mass}</Boxsizer>
                <Boxsizer>hair_color: {props.data.hair_color}</Boxsizer>
                <Boxsizer>skin_color: {props.data.skin_color}</Boxsizer>
                <Boxsizer>eye_color: {props.data.eye_color}</Boxsizer>
                <Boxsizer>birth_year: {props.data.birth_year}</Boxsizer>
                <Boxsizer>surface_water: {props.data.surface_water}</Boxsizer>
                <Boxsizer>gender: {props.data.gender}</Boxsizer>
            </Innerbox>
        </Outerbox>

    );
}

export default Cardmaker;