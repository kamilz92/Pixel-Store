import React from 'react';
import styled from 'styled-components';
import Button from '../shared/Button/Button';
const Item = ({ title, price, fn }) => {
    return (
        <Wrapper>
            <HeadingStyled>
                {title}
            </HeadingStyled>
            <Price>Price: {price}G</Price>
            <ButtonStyled onClick={fn}>
                Add
            </ButtonStyled>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
`;
const HeadingStyled = styled.h2`

`;
const Price = styled.p`
    font-size: 1.1.rem;
    padding: 1rem 1rem 1rem 0;
`;

const ButtonStyled = styled(Button)`
    margin: auto auto 0;
    @media (max-width: 1000px){
        margin: auto 0 0;
    }
`;
export default Item;