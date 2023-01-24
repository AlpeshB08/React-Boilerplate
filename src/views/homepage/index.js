import React from 'react';
import Layout from '@components/layout';
import ButtonComp from '@components/UI/Button';
import { home_api } from '@utils/api';
import Error from '@views/404/error';


const HomePage = () => {
	
	// Get API data
	const [user, setUser] = React.useState([]);
	// async function fetchData() { OR
	const fetchData = async () => {
		const data = await home_api();
		setUser(data);
  	}
	React.useEffect(() => {
		fetchData();
	},[])

	// note:
	/* Make sure that you do not use async-await inside the useEffect hook. 
	If you convert the useEffect hook itself to an async function, then React will show the following warning
	->  (Effect callbacks are synchronous to prevent race conditions. Put the async function inside)
	*/
	
	console.log(user,'home');

    if(
		user.responseCode !== 200
	){
		return(
			<Error />
		)
	}
    return (
        <Layout>
            <h1>This is Home Page</h1>
			<ButtonComp />
        </Layout>
    );
};

export default HomePage;