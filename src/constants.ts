export const BASE_URL: string = window.location.host === 'https://stagegrow.herokuapp.com/'
    ? 'https://stagegrow.herokuapp.com/'
    : window.location.origin

export const STRIPE_PUBLISHABLE_KEY = ''

export const PUSHER = {
    KEY: 'b3893e4536e003ed0924',
    CLUSTER: 'ap1'
}
