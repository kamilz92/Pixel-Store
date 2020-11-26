import styled from 'styled-components';

export const Header = styled.header`
    border-bottom: 3px solid rgba(0,0,0,.4);
`;
export const Wrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
`;
export const Logo = styled.div`
    color: #407E41;
    font-size: calc(1rem + 6.5vh);
    @media (max-width: 500px) {
        font-size: calc(2.3rem);
    }
`;
export const Paragraph = styled.p`
    font-size: 1.2rem;
    margin-top: .4rem;
    @media (max-width: 650px) {
        display: none;
    }
`;
export const IconWrapper = styled.div`
    position: relative;
`;
export const Icon = styled.img`
    cursor: pointer;
`;
export const ItemNumber = styled.span`
    position: absolute;
    width: 20px;
    height: 20px;
    background: orange;
    display: grid;
    place-items: center;
    top: 0;
    right: 10px;
    pointer-events: none;
`;