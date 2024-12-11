import React, {memo} from 'react';
import {convertPrice} from "@utils/currencyConverter";
import {TicketProps} from "@components/ticket-card/ticket-card.props";
import cl from './ticket-card.module.scss'
import {Button} from "antd";

const TicketCard = ({ ticket, currency, rates }: TicketProps) => {
    const convertedPrice = convertPrice(ticket.price, currency, rates);

    const handleBuy = () => {
        alert(`Вы купили билеты ${ticket.origin_name} (${ticket.origin}) → ${ticket.destination_name} (${ticket.destination}) по цене ${convertedPrice} ${currency}`)
    }

    return (
        <div className={cl.card}>
            <div className={cl.information}>
                <div className={cl.departure}>
                    <h2 className={cl.title}>{`${ticket.origin_name} (${ticket.origin})`}</h2>
                    <p className={cl.date}>{ticket.departure_date}</p>
                    <p className={cl.time}>{ticket.departure_time}</p>
                </div>
                <div className={cl.arrow}>
                    <p className={cl.stops}>Пересадок: {ticket.stops}</p>
                    ---------------------------→
                    <p className={cl.carrier}>Перевозчик: {ticket.carrier}</p>
                </div>
                <div className={cl.arrival}>
                    <h2 className={cl.title}>{`${ticket.destination_name} (${ticket.destination})`}</h2>
                    <p className={cl.date}>{ticket.arrival_date}</p>
                    <p className={cl.time}>{ticket.arrival_time}</p>
                </div>
            </div>
            <Button type="default" className={cl.button} onClick={handleBuy}>
                Купить за {convertedPrice} {currency}
            </Button>
        </div>
    );
};

export default memo(TicketCard)
