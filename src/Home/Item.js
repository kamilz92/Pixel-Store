import React from 'react';
import Button from '../shared/Button/Button';
const Item = ({ title }) => {
    return (
        <div>
            <h2>
                {title}
            </h2>
            <Button>
                Add
            </Button>
        </div>
    );
}

export default Item;