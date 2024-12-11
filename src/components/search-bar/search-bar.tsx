import React, {memo, useState} from 'react';
import {Input, Button} from 'antd';
import {SearchBarProps} from "@components/search-bar/search-bar.props";
import cl from './search-bar.module.scss'

const SearchBar = ({ onSearch }: SearchBarProps) => {
    const [searchCriteria, setSearchCriteria] = useState({
        origin: '',
        destination: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSearchCriteria((prev) => ({ ...prev, [name]: value }));
    };

    const handleSearch = () => {
        onSearch(searchCriteria);
        setSearchCriteria({
            origin: '',
            destination: '',
        });
    };

    return (
        <div className={cl.container}>
            <Input
                placeholder="Страна отправления"
                name="origin"
                value={searchCriteria.origin}
                onChange={handleChange}
            />
            <Input
                placeholder="Страна назначения"
                name="destination"
                value={searchCriteria.destination}
                onChange={handleChange}
            />
            <Button type="default" onClick={handleSearch}>
                Найти
            </Button>
        </div>
    );
};

export default memo(SearchBar);
