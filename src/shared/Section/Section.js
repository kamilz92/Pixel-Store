import styled from 'styled-components';
const Section = ({ heading, children }) => {
    return (
        <Wrapper>
            <Heading>{heading}</Heading>
            {children}
        </Wrapper>);
}

const Wrapper = styled.section`
    margin: 2.25rem 0;
    padding: 1rem;
    border: solid 3px black;
    @media (max-width: 1000px){
        margin: 2.25rem;
    }
`;

const Heading = styled.h3`
    display: inline-block;
    padding: 1rem;
    background-color: white;
    transform: translate(30px, -30px);
`;
export default Section;