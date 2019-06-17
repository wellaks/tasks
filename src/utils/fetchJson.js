const fetchJSON = async (url, options = {}) => {
    const response = await fetch(url, options);
    if (response.status >= 200 && response.status < 300) {
        const data = await response.json();
        return data;
    } else {
        const data = await response.json();
        const error = new Error(data.message);
        throw error;
    }
};

export default fetchJSON;
