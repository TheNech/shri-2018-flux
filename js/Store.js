/**
 * Store contain data and notify when it changes
 */
export default class Store {
    constructor(state) {
        this.state = state;
        this.listeners = [];
    }

    /**
     * Return current state
     */
    getState() {
        return this.state;
    }

    /**
     * Subscription to Store changes
     * @param {Function} listener
     */
    subscribe(listener) {
        this.listeners.push(listener);
    }

    /**
     * Cancel subscription to Store changes
     * @param {Function} listener
     */
    unsubscribe(listener) {
        this.listeners = this.listeners.filter(item => {
            item !== listener
        });
    }

    /**
     * Notify listeners about Store changes
     * @param {typeof State} data
     */
    notify(data) {
        this.listeners.forEach(item => {
            item(data);
        });
    }
}
