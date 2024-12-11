import React, { memo } from 'react';
import { Checkbox } from 'antd';
import { FilterProps } from "@components/filter/filter.props";
import cl from './filter.module.scss'

const Filter = ({ stops, onChange }: FilterProps) => {
    const handleCheckboxChange = (checkedValues: (number | string)[]) => {
        if (checkedValues.includes('4')) {
            onChange([0, 1, 2, 3]);
        } else {
            onChange(checkedValues);
        }
    };

    return (
        <div className={cl.container}>
            <h3 className={cl.title}>Фильтры</h3>
            <Checkbox.Group
                className={cl.options}
                options={[
                    { label: 'Все', value: 4 },
                    { label: 'Без пересадок', value: 0 },
                    { label: '1 пересадка', value: 1 },
                    { label: '2 пересадки', value: 2 },
                    { label: '3 пересадки', value: 3 },
                ]}
                value={stops}
                onChange={handleCheckboxChange}
            />
        </div>
    );
};

export default memo(Filter);
