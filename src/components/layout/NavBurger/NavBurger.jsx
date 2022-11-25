import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "../NavBar/NavBar";

const StyledBurger = styled.div`

    margin-top: 53px;
    margin-right: 30px;
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    right: 20px;
    z-index: 20;
    display: none;
    cursor: pointer;

    @media(max-width: 897px){

        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;

    }

    div
    {
        width: 3rem;
        height: 0.25rem;
        background-color: ${({ open }) => open ? '#ccc' : '#333'};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;

        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(30deg)' : 'rotate(0)'};
        }

        &:nth-child(2) {
            transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ open }) => open ? 0 : 1};
        }

        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-30deg)' : 'rotate(0)'} ;
        }
    }
`;

export default function NavBurger () {

    const [open, setOpen] = useState(false)

    return(

        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>

                <div/>
                <div/>
                <div/>

            </StyledBurger>
            <NavBar open={open}/>
        </>
    )

}
    