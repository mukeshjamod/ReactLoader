
import React, { Suspense } from 'react';
import { useLoaderData,json,defer, Await } from 'react-router-dom';
//import  {useState, useEffect} from 'react';
import EventsList from '../components/EventsList';

const EventsPage = () => {


  const {events} = useLoaderData();

  return(
    <Suspense fallback={<p style={{textAlign:'center'}}>Loading...</p>}>
      <Await resolve={events}>
      {(loadedEvents) => <EventsList events={loadedEvents} /> }
    </Await>
    </Suspense>
   
  );

  // const events=useLoaderData();
   //const data = useLoaderData();

  //  if(data.isError){
  //   return <p>{data.message}</p>
  //  }
  // const events = data.events;
  // return (
  //   <>
  //   <EventsList events={events}/>
  //   </>
  // )
}

export default EventsPage;

async function loadEvents(){
  const response = await fetch('http://localhost:8080/events');

  if(!response.ok){
    //return {isError:true,message:'Could not fetch'};
      //  throw new Response(JSON.stringify( {message: 'could not fetch event'}),({

      //    status: 500,
      //  })
       //)
  
    return json(
      {Message: 'could not fetch event'},
      {status: 500 ,}
    )
}
  else{
    // return response;
    const resData = await response.json();
    return resData.events;
  }
}


export  function loader(){
  return  defer({
          events: loadEvents()
        })
}