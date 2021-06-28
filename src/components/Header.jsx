import Button from './Button';
import { useLocation } from 'react-router-dom';
function Header({ onAdd, showAdd }) {
    const location = useLocation()

    return (
        <header className="header">
            <h1>Task Traker </h1>
            { location.pathname === '/' && <Button
                color={showAdd ? 'red' : 'green'}
                text={showAdd ? 'close' : 'Add'}
                onClick={onAdd} />}

        </header>
    )
}

export default Header
