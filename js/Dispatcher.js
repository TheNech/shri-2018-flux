/**
 * Class Dispather registers Stores and dispatches actions
 */
export default class Dispatcher {
    constructor() {
        this.callbacks = {};
    }

    /**
     * Register a callback
     * @param {Function} callback 
     */
    register(callback) {
        const id = 'id_' + Object.keys(this.callbacks).length;
        this.callbacks[id] = callback;
    }

    /**
     * Dispatches action to registered callbacks
     * @param {Object} action 
     */
    dispatch(action) {
        for (let id in this.callbacks) {
            this.callbacks[id](action);
        }
    }
}
