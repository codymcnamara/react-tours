import Loading from './Loading'
import Tour from './Tour'
import { useEffect, useState } from 'react';

const url = 'https://course-api.com/react-tours-project';

export default function Tours () {
    const [tours, setTours] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showReFetch, setShowReFetch] = useState(false);

    let tourComps = tours.map((tour)=>{
        return <Tour {...tour} key={tour.id} handleDelete={removeTour}/>
    })

    function removeTour(tourId){
        let newToursArray = tours.filter((oldTour)=>{
            return tourId !== oldTour.id;
        })
        setTours(newToursArray);
        if(newToursArray.length === 0) setShowReFetch(true)
    }


    const fetchTours = async ()=> {
        setIsLoading(true);
        try {
            let response = await fetch(url);
            let result = await response.json();
            setTours(result);
            setShowReFetch(false);
        } catch (error) {
            console.log(error)
        }
        setIsLoading(false);
    }
    
    useEffect(()=>{
        fetchTours();
    }, [])

    return (
        <div className='tours'>
            {isLoading ? <Loading/> : tourComps}
            {showReFetch && <button className='btn' onClick={fetchTours}>refresh</button>}
        </div>
    )
}