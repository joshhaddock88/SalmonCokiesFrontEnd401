import Footer from './Footer.js'
import Head from './Head.js'
import Header from './Header.js'
import Main from './Main.js'

function CookieStandAdmin() {
    // const[store, setStore] = useState({});
    // const[stores, setStores] = useState([]);

    // const addStore = (newStore) => {
    //     setStore(newStore);
    //     setStores([...stores, newStore]);
    //     console.log(stores);
    // }

    
    return (
        <>
        <Head/>
        <Header/>
        <div>
            <Main/>
            {/* <pre>{JSON.stringify(store, undefine, 2)}</pre> */}
        </div>
        <Footer/>
        </>
    )
}

export default CookieStandAdmin;