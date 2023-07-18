import Cookies from 'js-cookie'
import React from 'react'
import jwtDecode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'

const callApi = async (options, callback, stateFunctions) => {

    const { url, method, body, errorFeedback } = options

    const { handleLoading, handleMessage } = stateFunctions

    try {
        handleLoading(true)
        handleMessage('')
        const response = await fetch(url, {
            method: method,
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        if(response.status >= 400 && response.status <= 500) {
            const result = await response.json()
            console.log(result)
            handleLoading(false)
            if(errorFeedback)
                handleMessage(errorFeedback, 'error');
            else {
                handleMessage(result.message, 'error')
            }
            return
        }
        else {
            
            const result = await response.json()
            handleLoading(false)
            console.log(result)
            // return result
            callback(result)
        }
        
    } catch (error) {
        handleLoading(false)
        handleMessage('Error occured on the server!', 'error')
    }
}

const useAuth = () => {

    const navigate = useNavigate()

    const URL = process.env.REACT_APP_API_URL
    
    const login = async ({ reqBody, handleLoading, handleMessage }) => {
        const loginURL = `${URL}/auth/login`

        await callApi({
            url: loginURL,
            method: 'POST',
            body: reqBody,
            errorFeedback: 'Email or password is invalid'
        }, (res) => {
            Cookies.set('token', res.data.token, {
                expires: 1
            })
            navigate('/')
        }, {
            handleLoading, handleMessage
        })
    }

    const register = async ({ reqBody, handleLoading, handleMessage }) => {
        const registerURL = `${URL}/users`

        await callApi({
            url: registerURL,
            method: 'POST',
            body: reqBody
        }, () => {
            handleMessage('Registration successfull!', 'success')
            setTimeout(() => {navigate('/login')}, 3000)
        }, {
            handleLoading, handleMessage
        })
    }

    const checkAuth = () => {
        const token = Cookies.get('token')
        // console.log(token)
        // const decoded = jwtDecode(token)
        // console.log(decoded)
        if(token) {
            return true
        }
        else {
            return false
        }
    }

    return {
        login, register, checkAuth
    }

}

export default useAuth