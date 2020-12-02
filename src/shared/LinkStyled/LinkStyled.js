import React from 'react';
import { Link } from 'react-router-dom';
import styled, {keyframes} from 'styled-components';
import Button from '../Button/Button';

const LinkStyled = ({ text, where, visableFromStart, itemCount }) => {
    return (
        <Wrapper>
            {visableFromStart || itemCount > 0 ? <ButtonStyled to={where} as={Link}>{text}</ButtonStyled> : null}
        </Wrapper>
    );
}
const Wrapper = styled.div`
    min-height: 55px;
    margin-top: 2.25rem;
    @media (max-width: 1000px){
        margin: 2.25rem;
    }
`;
const show = keyframes`
    from {
        opacity: 0; 
        transform: translateX(50px);
    }
    to {
        opacity: 1; 
        transform: translateX(0);
    }
`;
const ButtonStyled = styled(Button)`
    border-style: solid;
    border-width: 4px;
    background-color: #209cee;
    color: white;
    animation: ${show} .32s ease-in forwards;
    &:hover&:after {
        box-shadow: inset -5px -5px #006bb3;
    }
    &:after {
        box-shadow: inset -3px -3px #006bb3;
    }
`;
export default LinkStyled;