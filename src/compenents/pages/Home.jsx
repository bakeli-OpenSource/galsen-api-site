import React from 'react'
import { Container } from 'react-bootstrap'
import Sidebar from './Sidebar'
import Menu from './Menu'

function Home() {
    return (
        <div>
            <Container fluid className="content">
                <div className="row position-relative ">
                    <div className="col-2 overflow-y-auto sidebar">
                        <Sidebar />
                    </div>
                    <div className="col-10 TextMenu">
                        <Menu />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Home