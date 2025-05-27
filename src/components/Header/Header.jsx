import './styles.css';
import Logo from '../../assets/LogoListMe.png';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Header({ section, sectionName }) {

    const navigate = useNavigate();

    return (
        <header className='headerSection'>
            <img src={Logo} alt="Logo ListMe" onClick={() => navigate('/')} />
            <h1>
                {section === "home" && null}

                {section === "lists" && "Minhas Listas"}

                {section === "list" && (
                    <>
                        <span onClick={() => navigate(-1)} className="backLink">
                            Minhas Listas
                        </span>
                        <span><ChevronRight size={20} style={{ margin: '0 8px' }} /></span>
                        {sectionName}
                    </>
                )}
            </h1>
        </header>
    );
}

export default Header;
