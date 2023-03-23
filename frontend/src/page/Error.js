import React from 'react';
import { useRouteError } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import PageContent from '../components/PageContent';


const ErrorPage = () => {

    const error = useRouteError();
    // error.status
    let title = 'An error occured';
    let message = 'somthing went wrong';

    if(error.status === 500){
        message = error.data.message;
    }
    if(error.status === 404){
        title = 'not found'
        message = 'could not find page or resources'
    }

  return (<>
    <MainNavigation/>
    <PageContent title={title}>
        <p>{message}</p>
    </PageContent> 
  </>
  )
}

export default ErrorPage;