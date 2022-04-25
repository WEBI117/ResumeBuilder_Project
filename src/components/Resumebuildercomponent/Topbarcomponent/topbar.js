import Row from 'react-bootstrap/Row'
import './topbar.css'
let Topbar = ({logoutEventHandler}) => {
    let logoutHandler = () => {
        logoutEventHandler()
    }
    return(
        <div data-testid='topbar'>
            <Row>
                <div className='topbar-container'>
                    <button className='logout-button' onClick={(ev) => {logoutHandler()}}>Logout</button>
                </div>
            </Row>
        </div>
    )
}
export default Topbar;
