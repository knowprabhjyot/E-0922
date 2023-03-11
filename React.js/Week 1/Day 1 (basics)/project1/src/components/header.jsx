import './header.css';

export function Header() {

    console.log("Here you have reached Header Component!");

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        Contact
                    </li>
                    <li>
                        Services
                    </li>
                    <li>
                        About
                    </li>
                </ul>
            </nav>
        </header>
    )
}

// Create a footer component
// and show it on the UI