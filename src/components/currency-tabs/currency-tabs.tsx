import React, {memo} from 'react';
import { Tabs } from 'antd';
import {CurrencyTabsProps} from "@components/currency-tabs/currency-tabs.props";
import cl from './currency-tabs.module.scss'

const { TabPane } = Tabs;

const CurrencyTabs = ({ currentCurrency, onChange }: CurrencyTabsProps) => {
    return (
        <div className={cl.container}>
            <h3 className={cl.title}>Курс</h3>
            <Tabs activeKey={currentCurrency} onChange={onChange} type="card">
                <TabPane tab="RUB" key="RUB" />
                <TabPane tab="USD" key="USD" />
                <TabPane tab="EUR" key="EUR" />
            </Tabs>
        </div>
    );
};

export default memo(CurrencyTabs)