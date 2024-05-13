const App = () => {
    const [show, setShow] = React.useState(false)
    React.useEffect(() => {
        useNui("toggle", () => {
            setShow((prev) => {
                return !prev
            })
        })
    }, [])

    return (
        <article className={`top-1/3 left-3 fixed flex justify-center items-center border-2 bg-red-300 border-red-700 border-solid rounded-xl text-center size-40 transition-all ${show ? "opacity-100" : "opacity-0"}`}>
            <h1>Hello React!</h1>
            <View />
        </article>
    )
}