//Create a search bar that performs search requests with debouncing and throttling to improve user experience.

//debouncing

function debounce(search, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => search.apply(this, args), wait);
    };
    }

    //Throttling

    function throttle(search, limit) {
    let lastCall = 0;
    return function(...args) {
        const now = Date.now();
        if (now - lastCall >= limit) {
            lastCall = now;
            search(...args);
    }
};
}
    const searchInput1 = document.getElementById('search1');
    const searchInput2 = document.getElementById('search2');
    const handleSearch = (event) => {
    console.log('Search:', event.target.value);
    };


    searchInput1.addEventListener('input', debounce(handleSearch, 1000));
    searchInput2.addEventListener('input', throttle(handleSearch, 300));
