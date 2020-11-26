import React from 'react';
import Section from '../shared/Section/Section';
import Item from './Item';



const Home = () => {
    return (
        <main>
            <Section heading="Wepons">
                <div>
                    <Item title="Buster Sword" />
                    <Item title="Mace of Doom"/>
                    <Item title="Frostmourne"/>
                    <Item title="Sword Of Rupture" />
                </div>
            </Section>
            <Section heading="Armors">

            </Section>
            <Section heading="Potions">

            </Section>
        </main>
    );
}

export default Home;