import Form from "./Form.js"

function Main(props) {
    return (
        <>
            <Form onSubmit={props.addStore} stores={props.stores}/>
            {/* <pre>{JSON.stringify(store, undefined, 2)}</pre> */}
        </>
    )
}

export default Main;