import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {

            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'  // san jose
                }
            });

            setResults(response.data.businesses);
            console.log('rsult inside serach api---' + JSON.stringify(results));


        } catch (error) {
            setErrorMessage('Something went wrong');
        }
    }

    useEffect(() => {
        console.log('inside use Effect')
        searchApi('pasta');
    }, []);

    return [searchApi, results, errorMessage];
};


