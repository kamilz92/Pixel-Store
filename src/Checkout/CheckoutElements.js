import styled, { keyframes } from 'styled-components';
import Button from '../shared/Button/Button';


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
export const ButtonLink = styled(Button)`
    text-decoration: none;
    border-style: solid;
    animation: ${show} .32s ease-in forwards;
`;
export const ButtonWrapper = styled.div`
    display: grid;
    place-items: center;
    min-height: 55px;
    margin-top: 2.25rem;
`;
