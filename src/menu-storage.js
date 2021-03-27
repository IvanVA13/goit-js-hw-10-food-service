const menuStorage = {
    getItem(key) {
        try {
            return JSON.parse(localStorage.getItem(key))
        }
        catch(error) {
            return undefined
        }
    },
    setItem(key, value) {
        try {
            return localStorage.setItem(key, JSON.stringify(value))
        }
        catch(error) {
            return undefined
        }
    }
}

export default menuStorage