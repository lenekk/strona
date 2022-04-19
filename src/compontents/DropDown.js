import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const DropDown = (props) => {
    return (
        <>
            <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    {props.userName && props.userName.email}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/zakupy">Moje zakupy</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/panel">Panel użytkownika</Dropdown.Item>
                    <Dropdown.Item onClick={props.logout}>Wyloguj</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>);
}

export default DropDown;