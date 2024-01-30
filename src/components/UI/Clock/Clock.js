import { useState, useEffect } from 'react';
import './clock.css'

const Clock = () => {
    const [days, setDays ] = useState();
    const [hours, setHours ] = useState();
    const [minutes, setMinutes ] = useState();
    const [seconds, setSeconds ] = useState();

    let interval;

    const CountDown = () => {
        const destination = new Date('April 2024').getTime();
        interval = setInterval(() => {
            const now = new Date().getTime();
            const different = destination - now

            const days = Math.floor(different / (1000 * 60 * 60 * 24))
            const hours = Math.floor(different % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
            const minutes = Math.floor (different % (1000 * 60 * 60) / (1000 * 60))
            const seconds = Math.floor(different % (1000 * 60) / 1000)

            if (destination < 0) clearInterval(interval.current);
            else {
                setDays(days)
                setHours(hours)
                setMinutes(minutes)
                setSeconds(seconds)
            }
        });
    };
    useEffect(() => {
        CountDown()
    })
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