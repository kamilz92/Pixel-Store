import React from 'react';
import { Link } from 'react-router-dom';
import { ItemWrapper} from './HomeElements';
import Section from '../shared/Section/Section';
import Item from './Item';
import LinkStyled from '../shared/LinkStyled/LinkStyled';


const Home = ({ fn, itemCount }) => {
    return (
        <>
            <LinkStyled itemCount={itemCount} visableFromStart={false} where="/checkout" text="Go to checkout" />
            <Section heading="Wepons">
                <ItemWrapper>
                    <Item fn={fn} title="Buster Sword" price={2} />
                    <Item title="Mace of Doom" price={4} />
                    <Item title="Frostmourne" price={5} />
                    <Item title="Sword Of Rupture" price={2} />
                    <Item fn={fn} title="Buster Sword" price={2} />
                    <Item title="Mace of Doom" price={4} />
                    <Item title="Frostmourne" price={5} />
                    <Item title="Sword Of Rupture" price={2} />
                </ItemWrapper>
            </Section>
            <Section heading="Armors">
                <ItemWrapper>
                    <Item fn={fn} title="Buster Sword" price={2} />
                    <Item title="Mace of Doom" price={4} />
                    <Item title="Frostmourne" price={5} />
                    <Item title="Sword Of Rupture" price={2} />
                    <Item fn={fn} title="Buster Sword" price={2} />
                    <Item title="Mace of Doom" price={4} />
                </ItemWrapper>
            </Section>
            <Section heading="Potions">
                <ItemWrapper>
                    <Item fn={fn} title="Buster Sword" price={2} />
                    <Item title="Mace of Doom" price={4} />
                    <Item title="Frostmourne" price={5} />
                    <Item title="Sword Of Rupture" price={2} />
                </ItemWrapper>
            </Section>
        </>
    );
}

export default Home;