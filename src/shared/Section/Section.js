import styled from 'styled-components';
const Section = ({ heading, children }) => {
    return (
        <Wrapper>
            <Heading>{heading}</Heading>
            {children}
        </Wrapper>);
}

const Wrapper = styled.section`
    max-width: 1000px;
    margin: 2.25rem auto;
    padding: 1rem;
    min-height: 500px;
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