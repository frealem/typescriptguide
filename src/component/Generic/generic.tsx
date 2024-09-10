import React from 'react'

//generic - used for creating flexible component

type listProps<T> = {
    items: T[];
    render: (item: T) => React.ReactNode;
};

const Generic1 = <T,>({ items, render }: listProps<T>) => {
    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{render(item)}</li>
                ))}
            </ul>
        </div>
    );
};

export default Generic1