import { useState, useEffect  } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortContent = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortContent.signal })
            // Getting response
            .then(res => {
                if(!res.ok){
                    throw Error('Tidak bisa mendapatkan data')
                }
                return res.json()
            })
            // Getting data
            .then((data) => {
               setData(data);
               setIsPending(false);
               setError(null);
            })
            .catch((err) => {
                if(err.name === 'AbortError'){
                    console.log('Aborted')
                }else{
                    setError(err.message);
                    setIsPending(false);
                }
            })
        }, 1000)

        return () => abortContent.abort();
    }, [url]);

    // Return Value
    return { data, isPending, error }
}

export default useFetch;