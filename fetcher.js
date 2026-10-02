//Task 3: Error-Resilient Data Fetcher




async function resilientFetch(url) {
    const maxAttempts = 3;
    const retry_delays = 1000;

    const pause = (ms) => new Promise( resolve => setTimeout(resolve, ms));

    for(let attempt = 1; attempt <= maxAttempts; attempt++){
        try{
            const response = await fetch(url);

            if(!response.ok){
                throw new Error(`HTTP status ${response.status}`);
            }
            return await response.json();
            console.log(response.json());
        }
        catch(error){
            console.warn(`Attempt ${attempt} of ${maxAttempts} for ${url}`);

            if(attempt < maxAttempts) {
                await pause(retry_delays);
            }
        }
    }
    throw new error(`${{success: false, error: "Failed after 3 attempts", url, attempts: 3 }}}`);
    
}

 resilientFetch('https://jsonplaceholder.typicode.com/invalid-endpoint-that-404s') ;
    


