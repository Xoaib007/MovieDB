import React, { useState } from 'react';
import Section from '../../../Components/Reusable/Section';
import MovieList from '../../../Components/Reusable/MovieList';

const HomePage = () => {
    const [selected, setSelected] = useState({
        first: 'On TV',
        second: 'On TV',
        third: 'Today'
    });

    const handleToggle = (section, selected) => {
        setSelected(prev=>({
            ...prev,
               [section]: selected
        }));
    }

    return (
        <div className='min-h-screen mx-32'>
            <Section title='Whats Popular' items={['On TV', 'In Theatre']} onToggle={handleToggle.bind(null, 'first')} isToggled={selected.first==='On TV'?false:true}>
                <MovieList fetch={selected.first}/>
            </Section>

            <Section title='Trending Now' items={['Day', 'Week']} onToggle={handleToggle.bind(null, 'first')} isToggled={selected.first==='Day'?false:true}>
                <MovieList fetch={selected.first}/>
            </Section>
        </div>


    );
};

export default HomePage;