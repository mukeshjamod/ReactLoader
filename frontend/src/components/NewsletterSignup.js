import { useFetcher} from 'react-router-dom';
import classes from './NewsletterSignup.module.css';
import { useEffect } from 'react';

const NewsletterSignup = () =>{
    const fetcher = useFetcher();
    const {data, state} = fetcher;

    useEffect(() => {
      if(state === 'idle' && data && data.message){
        window.alert(data.message);
      }
    }, [data,state]);
    

    return (
       <fetcher.Form method='post' action='/newsletter' className={classes.newsletter}>
            <input type="email"
              palceholder="sign up for newsletter..."
              aria-label="sign up for newsletter" 
              />         
            <button>Sign up</button>
        </fetcher.Form>
        
        ) 

   
}
export default NewsletterSignup;