const View = () => {
    const [data, setData] = React.useState("")
    React.useEffect(() => {
        useNui("info", (data) => {
            setData(data)
        })
    }, [])
    return <p>Text from arg: {data}</p>
}