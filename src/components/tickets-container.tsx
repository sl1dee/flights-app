import React, { useState } from 'react';
import ticketsData  from '../data/tickets.json'
import {useFetchRatesQuery} from "@features/currency/currency-api";
import CurrencyTabs from "@components/currency-tabs";
import Filter from "@components/filter";
import TicketCard from "@components/ticket-card";
import SearchBar from "@components/search-bar";
import cl from './tickets-container.module.scss'
import {Ticket} from "@components/tickets-container.props";

const tickets: Ticket[] = ticketsData.tickets;

const TicketsContainer = () => {
    const { data: ratesData } = useFetchRatesQuery('RUB');
    const [currency, setCurrency] = useState('RUB');
    const [selectedStops, setSelectedStops] = useState<(number | string)[]>([4]);

    const [searchCriteria, setSearchCriteria] = useState({
        origin: '',
        destination: '',
    });

    const rates = ratesData?.rates || {};

    const filteredTickets = tickets.filter((ticket: Ticket) => {
        if (!selectedStops.includes(4) && !selectedStops.includes(ticket.stops)) {
            return false;
        }

        if (searchCriteria.origin && !ticket.origin_name.toLowerCase().includes(searchCriteria.origin.toLowerCase())) {
            return false;
        }

        if (searchCriteria.destination && !ticket.destination_name.toLowerCase().includes(searchCriteria.destination.toLowerCase())) {
            return false;
        }

        return true;
    });

    return (
        <div className={cl.container}>
            <h1 className={cl.title}>Билеты</h1>
            <SearchBar onSearch={setSearchCriteria} />
            <div className={cl.information}>
                <div className={cl.filterGroup}>
                    <CurrencyTabs currentCurrency={currency} onChange={setCurrency} />
                    <Filter stops={selectedStops} onChange={setSelectedStops} />
                </div>
                <div className={cl.cards}>
                    {filteredTickets.map((ticket: Ticket) => (
                        <TicketCard
                            key={ticket.origin_name + ticket.destination_name + ticket.arrival_date + ticket.arrival_time}
                            // в данном случае в ключ попытался передать максимально уникальное значение
                            // key={ticket.id} // в ключ по-хорошему необходимо передавать id который приходит с бэка или json'а
                            ticket={ticket}
                            currency={currency}
                            rates={rates}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TicketsContainer;
