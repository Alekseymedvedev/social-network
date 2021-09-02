const Sidebar = () => {
    return (
        <aside className="sidebar">
            <nav>
                <ul>
                    <li className="list">
                        <a href="/profile">Профиль</a>
                    </li>
                    <li className="list">
                        <a href="/messages">Сообщения</a>
                    </li>
                    <li className="list">
                        <a href="№">Новости</a>
                    </li>
                    <li className="list">
                        <a href="№">настройка</a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
