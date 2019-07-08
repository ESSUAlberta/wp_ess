import axios from 'axios'
import { Map } from 'immutable'

let initialStorage = JSON.parse(localStorage.getItem("WP_ESS_LOCAL_STORAGE"))

var events = new Map()
var stateSubscribers = new Map();
var states = initialStorage ? initialStorage["states"] ? new Map(initialStorage.states) : new Map() : new Map()

global.ESS_API = async ({ uri, method, bodyData, stateName }) => {
    if (axios[method]) {
        global.setState(stateName, { ...global.getState(stateName), dirty: true })
        let result = await axios[method](`http://localhost:5000/${uri}`, method === 'get' || method === 'delete' ? undefined : bodyData)
        global.setState(stateName, result.data)
        // console.log(await axios[method](`http://localhost:5000/${uri}`, method === 'get' || method === 'delete' ? undefined : bodyData))
    }
}

global.getEvent = (eventName) => {
    events.get(eventName)
}

global.setEvent = (eventName, event) => {
    events.set(eventName, event)
}

global.getState = (stateName) => {
    return states.get(stateName)
}

const notifyAll = (stateName) => {
    const allSubscribers = stateSubscribers.get(stateName)
    if (allSubscribers) {
        Array.from(allSubscribers.values()).forEach(({ callbackFn }) => {
            callbackFn()
        })
    }
}

global.setState = (stateName, state) => {
    states = states.set(stateName, state)
    notifyAll(stateName)
    localStorage.setItem("WP_ESS_LOCAL_STORAGE", JSON.stringify({ states }))
    return state;
}

global.subscribe = (stateName, subscriberName, callbackFn) => {
    let subscribers = stateSubscribers.get(stateName)
    if (subscribers) {
        subscribers = subscribers.set(subscriberName, { callbackFn })
        stateSubscribers = stateSubscribers.set(stateName, subscribers)
    } else {
        subscribers = (new Map()).set(subscriberName, { callbackFn })
        stateSubscribers = stateSubscribers.set(stateName, subscribers)
    }
}

global.unsubscribe = (stateName, subscriberName) => {
    let subscribers = stateSubscribers.get(stateName)
    if (subscribers) {
        subscribers = subscribers.remove(subscriberName)
        stateSubscribers = stateSubscribers.set(stateName, subscribers)
    }
}