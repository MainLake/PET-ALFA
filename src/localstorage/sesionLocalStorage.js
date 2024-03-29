export const saveDataLocalStorage = (data) => {
    const dataJson = JSON.stringify(data);
    localStorage.setItem("PETLOG", dataJson);
}


export const getDataLocalStorage = () => {
    const dataJson = localStorage.getItem("PETLOG");
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(JSON.parse(dataJson));
        }, 1500);
    });
}

export const deleteDataLocalStorage = () => {
    localStorage.removeItem("PETLOG");
}