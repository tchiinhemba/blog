
import {FiGithub, BsMedium, FaLinkedinIn} from 'react-icons/all'

export function Header() {
    return (
        <header>
            <div>
                <span className="logo"></span>
                <div>
                    <ul>
                        <li>Categories</li>
                        <li>About Me</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            <div>
                <div><input type="text" /></div>
                <div>
                    <ul>
                        <li><FiGithub /></li>
                        <li><BsMedium/></li>
                        <li><FaLinkedinIn/></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}