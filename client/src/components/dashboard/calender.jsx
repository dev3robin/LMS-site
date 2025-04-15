
import React, { useState, useEffect } from "react";

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [days, setDays] = useState([]);

    useEffect(() => {
        renderCalendar();
    }, [currentDate]);

    const renderCalendar = () => {
        const firstDayIndex = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
        const lastDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

        let tempDays = [];

        for (let i = 1; i < firstDayIndex; i++) {
            tempDays.push(<div key={`empty-${i}`} className="empty"></div>);
        }

        for (let day = 1; day <= lastDate; day++) {
            tempDays.push(
                <div 
                    key={day} 
                    className={`date ${day === new Date().getDate() && 
                        currentDate.getMonth() === new Date().getMonth() &&
                        currentDate.getFullYear() === new Date().getFullYear() ? "current-day" : ""}`}
                    onClick={() => handleDateClick(day)}
                >
                    {day}
                </div>
            );
        }

        setDays(tempDays);
    };
    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    return (
        <div className="calendar-container">
            <div className="calendar-header">
                <button onClick={prevMonth}>&lt;</button>
                <h2>{currentDate.toLocaleString("default", { month: "long", year: "numeric" })}</h2>
                <button onClick={nextMonth}>&gt;</button>
            </div>

            <div className="calendar-days">
                <div className="day">Mon</div>
                <div className="day">Tue</div>
                <div className="day">Wed</div>
                <div className="day">Thu</div>
                <div className="day">Fri</div>
                <div className="day">Sat</div>
                <div className="day">Sun</div>
            </div>

            <div className="calendar-dates">
                {days}
            </div>
        </div>
    );
};

export default Calendar;
