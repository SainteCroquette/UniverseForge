import {NavLink} from "react-router-dom";

function App() {

    return (
        <div className={''}>
            app
            <NavLink to={'/counter'}>Counter</NavLink>
        </div>
    );
}

export default App;
