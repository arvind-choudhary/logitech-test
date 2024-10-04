class ApiCacheInterface { 

    #storage = new Map<string, Response>()

    set(data: Response): void {
        const key = data.url;
        this.#storage.set(key, data);
    }

    async get(url: string) {
        return new Promise((resolve, reject) => {
            return this.#storage.has(url) ? resolve(this.#storage.get(url)) : reject(null);
        })
    }
}


const ApiCache = new ApiCacheInterface()
export default ApiCache;