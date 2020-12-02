import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../shared/Section/Section';
import LinkStyled from '../shared/LinkStyled/LinkStyled';
import ItemList from './ItemList';
import Form from './Form';

const Checkout = () => {
    return (
        <>
            <LinkStyled where="/" visableFromStart={true} text="Back to shooping" />
            <Section heading="Checkout">
                <ItemList />
                <Form />
            </Section>
        </>
    );
}

export default Checkout;