import axios from 'axios'

import { BASE_URL } from '../constants'

export class MentorService {
    getAll() {
        return axios.get(BASE_URL + '/mentors')
            .then(res => {
                return res.data
            })
    }
    get(id) {
        return axios.get(BASE_URL + '/admin/mentor/' + id)
            .then(res => {
                return res.data
            })
    }
    invite(name, email) {
        return axios.post(BASE_URL + '/admin/mentor', {
            name,
            email
        })
    }
}
