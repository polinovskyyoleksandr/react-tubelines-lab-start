const BASE_URL = 'https://api.tfl.gov.uk/line/mode/tube/status'

const show = async () => {
    try {
        const res = await fetch(BASE_URL)
        const data = await res.json()
        const lineName = data.map(line => line.name)
        const lineStatus = data.map(line => line.lineStatuses[0].statusSeverityDescription)
        console.dir(lineName)
        console.dir(lineStatus)
        return data
    } catch(error) {
        console.log(error)
    }
}

show()

export { show }