import React, { useEffect } from 'react';
import axios from 'axios';

const BLog = () => {
    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: 'https://pizza-and-desserts.p.rapidapi.com/pizzas/1',
                headers: {
                    'X-RapidAPI-Key': 'db561d538dmshd405db89746f2e0p165ac1jsnc69b8f3eaa1a',
                    'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com',
                },
            };

            try {
                const response = await axios.request(options);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []); // The empty dependency array ensures useEffect runs only once on component mount

    return (
        <div>
            {/* Your component JSX goes here */}
            <p>Pizza information will be logged to the console.</p>
        </div>
    );
};

export default BLog;
