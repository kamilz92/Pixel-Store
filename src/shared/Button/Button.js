import styled from 'styled-components';

const Button = styled.button`
    font-size: 1.2rem;
    cursor: pointer;
    color: ${props => !props.color ? '#000' : props.color};
    background-color: ${props => !props.bgColor ? 'white' : props.bgColor};
    /**/
    border-width: 4px;
    border-image-slice: 2;
    border-image-width: 2;
    border-image-repeat: stretch;
    border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="5" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2 1 h1 v1 h-1 z M1 2 h1 v1 h-1 z M3 2 h1 v1 h-1 z M2 3 h1 v1 h-1 z" fill="rgb(33,37,41)" /></svg>');
    border-image-outset: 2;
    position: relative;
    display: inline-block;
    padding: 1.25rem;
    margin: 4px;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    &:hover&:after{
        box-shadow: inset -4.25px -4.25px ${props => !props.pesudoColor ? '#adafbc' : props.pesudoColor};
    }
    &:after {
    position: absolute;
    top: -4px;
    right: -4px;
    bottom: -4px;
    left: -4px;
    content: "";
    transition: .25s box-shadow linear;
    box-shadow: inset -3px -3px ${props => !props.pesudoColor ? '#adafbc' : props.pesudoColor};
    }
    &:focus {
        outline: none;
    }

`;
export default Button;