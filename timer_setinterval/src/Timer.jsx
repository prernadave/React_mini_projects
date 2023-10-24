import { useEffect, useState } from "react"

function Timer() {
    const [Time, setTime] = useState(30)

    useEffect(() => {
        const IntervalId = setInterval(() => {
            if (Time > 0) {
                setTime(Time - 1)
            } else {
                clearInterval(IntervalId)
            }
        }, 1000);

        // Return a cleanup function to clear the interval when the component unmounts
        return () => {
            clearInterval(IntervalId);
        }
    }, [Time]);

    return (<h2>Timer:{Time}</h2>)
}

export default Timer;
