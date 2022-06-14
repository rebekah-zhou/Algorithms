/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
    this.capacity = capacity
    this.hash = {}
    this.stash = []
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.hash[key] !== undefined) {
        const filteredArr = this.stash.filter(ele => ele[0] !== key)
        this.stash = [[key, this.hash[key]]].concat(filteredArr)
        return this.hash[key]
    } else return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.hash[key] === undefined) {
        const size = this.stash.unshift([key, value])
        
        if (size > this.capacity) {
            const pairToDelete = this.stash.pop()
            delete this.hash[pairToDelete[0]]
        }
    } else {
        const filteredArr = this.stash.filter(ele => ele[0] !== key)
        this.stash = [[key, value]].concat(filteredArr)
    }

    this.hash[key] = value
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */