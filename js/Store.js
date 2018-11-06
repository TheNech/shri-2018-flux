/**
 * Store contain data and notify when it changes
 */
export default class Store {
    constructor(dispatcher) {
        this.listeners = [];
        dispatcher.register(this.actionToRegister.bind(this));
    }

    /**
     * Abstract method
     */
    actionToRegister(action) {}

    /**
     * Return current state
     */
    getState() {
        console.log('Store returned state');
        return this.state;
    }

    /**
     * Subscription to Store changes
     * @param {Function} listener
     */
    subscribe(listener) {
        this.listeners.push(listener);
        console.log('Listener was subscribed');
    }

    /**
     * Cancel subscription to Store changes
     * @param {Function} listener
     */
    unsubscribe(listener) {
        this.listeners = this.listeners.filter(item => {
            item !== listener
        });
        console.log('Listener was unsubscribed');
    }

    /**
     * Notify listeners about Store changes
     * @param {typeof State} data
     */
    notify() {
        this.listeners.forEach(item => {
            item(this.state);
        });
        console.log('Listeners were notifyed');
    }
}
