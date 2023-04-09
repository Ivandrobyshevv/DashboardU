import React from 'react';

const Header = (props) => {
    return (
        <div className="container">
            <header className="d-flex justify-content-center py-3">
                <ul className="nav nav-pills">
                    <h1 className="mx-3" style={{color: 'white'}}>Dashboard <em>UFANET</em></h1>
                </ul>
                <a className="redirect_admin fs-4" href={props.adminUrl}>Редирект в ADMIN</a>
            </header>
        </div>
    );
};

export default Header;