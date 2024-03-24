export const encrypt = async (text) => {
    return fetch(
        'https://crip117.azurewebsites.net/api/v1/encrypt',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(text)
        });
};

export const decrypt = async (text) => {
    return fetch(
        'https://crip117.azurewebsites.net/api/v1/decrypt',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(text)
        });
};