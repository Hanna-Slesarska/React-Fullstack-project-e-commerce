import { useState, useEffect } from 'react';
import './clock.css'

const Clock = () => {
    const [days, setDays ] = useState(0);
    const [hours, setHours ] = useState(0);
    const [minutes, setMinutes ] = useState(0);
    const [seconds, setSeconds ] = useState(0);

    useEffect(() => {
        const CountDown = () => {
            const destination = new Date("2024-12-01T00:00:00Z").getTime();

            const interval = setInterval(() => {
                const now = new Date().getTime();
                const difference = destination - now;

                if (difference <= 0) {
                    // Stop the countdown when it reaches 0
                    clearInterval(interval);
                    setDays(0);
                    setHours(0);
                    setMinutes(0);
                    setSeconds(0);
                } else {
                    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                    setDays(days);
                    setHours(hours);
                    setMinutes(minutes);
                    setSeconds(seconds);
                }
            }, 1000);

            return () => clearInterval(interval); // Clean up the interval on component unmount
        };

        CountDown();
    }, []);
    return (
        <div className='clock-wrapper'>
            <div className='clock-data'>
                <div className='clock'>
                    <h2>{days}</h2>
                    <h5>Days</h5> 
                </div>
            </div>
            <span>:</span>

            <div className='clock-data'>
                <div className='clock'>
                    <h2>{hours}</h2>
                    <h5>Hours</h5>  
                </div>
            </div>
            <span>:</span>
            <div className='clock-data'>
                <div className='clock'>
                    <h2>{minutes}</h2>
                    <h5>Minutes</h5>
                </div>  
            </div>
            <span>:</span>
            <div className='clock-data'>
                <div className='clock'>
                    <h2>{seconds}</h2>
                    <h5>Seconds</h5>
                </div>
            </div>
    
        </div>
    )
}
export default Clock;