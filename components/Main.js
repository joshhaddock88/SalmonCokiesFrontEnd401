import Table from "./Table.js"
import CookieStandAdmin from "./CookieStandAdmin.js";

function Main({newStore, stores}) {
    const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
    return (
        <>
            <CookieStandAdmin newStore={newStore}/>
            <Table stores={stores} hours={hours}/>
        </>
    )
}

export default Main;