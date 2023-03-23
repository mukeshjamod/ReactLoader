import { Outlet, useNavigation, 
    //useLoaderData 
} from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';

function RootLayout() {
    const navigation = useNavigation();
//   const events = useLoaderData();
//   console.log(events)
  return (
    <>
      <MainNavigation />
      <main>
        {navigation.state === 'loading' && <p>Loading....</p>}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;