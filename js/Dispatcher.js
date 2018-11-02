/**
 * Class Dispather registers Stores and dispatches actions
 */
export default class Dispatcher {
    constructor() {
        this.callbacks = [];
    }

    /**
     * Register a callback
     * @param {Function} callback 
     */
    register(callback) {
        this.callbacks.push(callback);
    }

    /**
     * Dispatches action to registered callbacks
     * @param {Object} action 
     */
    dispatch(action) {
        this.callbacks.forEach(callback => {
            callback(action);
        });
    }
}
