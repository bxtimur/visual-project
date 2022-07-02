const getMyFunction = async () => {
    try {
        const res = await fetch(
            'https://min-api.cryptocompare.com/data/all/coinlist?summary=true'
        )
        const data = res.json()

        console.log(data)
    } catch (e) {
        console.log(e)
    }
}

getMyFunction()
