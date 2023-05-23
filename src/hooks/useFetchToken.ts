import { useCallback } from "react"

function useFetchToken() {
    const url = 'https://startup-summer-proxy-production.up.railway.app/2.0/oauth2/password'
    const urlUpd = `${url}/?login=sergei.stralenia@gmail.com&password=paralect123&client_id=2356&client_secret=v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948`

    const getData = useCallback(async () => fetch(
        urlUpd, {
        method: 'GET',
        headers: {
            'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
            'hr': '0',
        }
    })
        .then(responce => responce.json())
        .then(data => {
            localStorage.setItem('access_token', JSON.stringify(data))
        }), [urlUpd])
    return {
        getData
    }
}

export { useFetchToken };