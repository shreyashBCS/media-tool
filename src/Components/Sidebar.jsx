

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Nav, NavDropdown, Collapse } from 'react-bootstrap';

// import '../App.css'


// const Sidebar = () => {


//     const [isOpen, setIsOpen] = useState(true); // State to toggle sidebar

//     const [openWorkflows, setOpenWorkflows] = useState(false);
//     const [setting, setSetting] = useState(false)


//     const handleWorkflowsClick = () => {
//         setOpenWorkflows(!openWorkflows);
//     };

//     const toggleSidebar = () => setIsOpen(!isOpen); // Toggle sidebar visibility

//     const handleSetting = () => {
//         setSetting(!setting)
//     }
//     return (
//         <>
//             <div className='bg-warning h-80 w-full d-flex justify-content-between'>
//                 <img

//                     alt='logo'
//                     style={{ width: '150px', height: '50px', display: "block" }}
//                 />
//                 <i className="bi bi-person" style={{ fontSize: '2rem', marginRight: "14px" }}></i>
//             </div>
//             {/* ----------------------------------------------------------------------------------------------- */}

//             {isOpen && (}<div style={{
//                 backgroundColor: '#018B96', borderRadius: 4, width: "240px", height: "100vh", position: "fixed", top: 0, left: 0, zIndex: 1000, padding: 0, marginTop: "51px", fontFamily: 'Roboto, sans-serif' // Add this line
//             }}>
//                 <div className="p-3" style={{ padding: 0, margin: 0 }}>

//                     <Nav defaultActiveKey="/home" className="flex-column">


//                         <Nav.Link as={Link} to="" className="nav-link text-white custom-nav-link d-block" style={{ marginTop: "0px" }}>Dashboard  </Nav.Link>
//                         <Nav.Link as={Link} to="/" className="nav-link text-white custom-nav-link d-block"> Forms  </Nav.Link>

//                         {/* ------------------------------------------------------------------------------ */}
//                         <Nav.Link as={Link} to="/" onClick={handleWorkflowsClick} className="nav-link text-white custom-nav-link d-block">Workflows </Nav.Link>
//                         <Collapse in={openWorkflows}>
//                             <ul className="list-unstyled pl-3 text-white ">
//                                 <li><Nav.Link as={Link} to="/" className='text-white'>Image Workflow</Nav.Link></li>
//                                 <li><Nav.Link as={Link} to="/" className='text-white'>Audio Workflow</Nav.Link></li>
//                                 <li><Nav.Link as={Link} to="/" className='text-white'>QC Workflow</Nav.Link></li>
//                             </ul>
//                         </Collapse>


//                         {/* --------------------------------------------------------------------------------------------------------------- */}


//                         <Nav.Link as={Link} to="/" onClick={handleSetting} className="nav-link text-white  custom-nav-link d-block">File Inspection </Nav.Link>

//                         <Collapse in={setting}>
//                             <ul className="list-unstyled pl-3 text-white ">
//                                 <li><Nav.Link as={Link} to="/" className='text-white'>Setting </Nav.Link></li>
//                             </ul>
//                         </Collapse>

//                     </Nav>
//                 </div>
//             </div>

//         </>
//     );
// };
// export default Sidebar;

import React, { useState } from 'react';
import { Nav, Collapse, Modal, Button, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css'
import { useNavigate } from 'react-router-dom';
import logo from '../assets/BrightCrestSolutions_Logo_Main_optimized.png'

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true); // State to toggle sidebar
    const [openWorkflows, setOpenWorkflows] = useState(false); // State for Workflows collapse
    const [setting, setSetting] = useState(false); // State for File Inspection collapse
    const [showModal, setShowModal] = useState(false); // State to manage modal visibility


    const toggleSidebar = () => setIsOpen(!isOpen); // Toggle sidebar visibility
    const handleWorkflowsClick = () => setOpenWorkflows(!openWorkflows); // Toggle Workflows collapse
    const handleSetting = () => setSetting(!setting); // Toggle File Inspection collapse

    const handleModalOpen = () => setShowModal(true); // Open modal
    const handleModalClose = () => setShowModal(false); // Close modal


    // navigate to dashboard
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/trial'); // Navigate to the dashboard route
    };


    return (
        <div>
            {/* 3-Line Button to Toggle Sidebar */}
            <button
                onClick={toggleSidebar}
                style={{
                    position: 'fixed',
                    top: '10px',
                    left: '210px',
                    zIndex: 1100,
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                }}
            >
                <div style={{ width: '25px', height: '3px', background: '#018B96', margin: '5px 0' }}></div>
                <div style={{ width: '25px', height: '3px', background: '#018B96', margin: '5px 0' }}></div>
                <div style={{ width: '25px', height: '3px', background: '#018B96', margin: '5px 0' }}></div>
            </button>

            {/* Sidebar */}
            {isOpen && (
                <div
                    style={{
                        backgroundColor: '#018B96',
                        borderRadius: 4,
                        width: "240px",
                        height: "100vh",
                        position: "fixed",
                        top: 0,
                        left: 0,
                        zIndex: 1000,
                        padding: 0,
                        marginTop: "40px",
                        fontFamily: 'Roboto, sans-serif',
                    }}
                >
                    <div className="nav-hover-wrapper">

                        <div className="p-3" style={{ padding: 0, margin: 0 }}>
                            <Nav defaultActiveKey="/home" className="flex-column">


                                {/* DASHBOARD */}
                                <Nav.Link as={Link} to="/trial" onClick={handleNavigation} className="nav-link text-white custom-nav-link d-block nav-hover" style={{ marginTop: "0px" }}>Dashboard</Nav.Link>

                                {/* FORMS */}

                                <Nav.Link as={Link} to="/" className="nav-link text-white custom-nav-link d-block nav-hover">Forms</Nav.Link>

                                {/* Workflows */}
                                <Nav.Link as={Link} to="/" onClick={handleWorkflowsClick} className="nav-link text-white custom-nav-link nav-hover d-block">Workflows</Nav.Link>
                                <Collapse in={openWorkflows}>
                                    <ul className="list-unstyled pl-3 text-white">
                                        <li><Nav.Link as={Link} to="/" className='text-white' onClick={handleModalOpen}>Video Workflow</Nav.Link></li>

                                        <li><Nav.Link as={Link} to="/" className='text-white'>Image Workflow</Nav.Link></li>
                                        <li><Nav.Link as={Link} to="/" className='text-white'>Audio Workflow</Nav.Link></li>
                                        <li><Nav.Link as={Link} to="/" className='text-white'>QC Workflow</Nav.Link></li>
                                    </ul>
                                </Collapse>






                                {/* File Inspection */}
                                <Nav.Link as={Link} to="/" onClick={handleSetting} className="nav-link text-white custom-nav-link nav-hover d-block">File Inspection</Nav.Link>
                                <Collapse in={setting}>
                                    <ul className="list-unstyled pl-3 text-white">
                                        <li><Nav.Link as={Link} to="/" className='text-white'>Setting</Nav.Link></li>
                                    </ul>
                                </Collapse>



                            </Nav>
                        </div>
                    </div>
                </div>
            )}
            {/* MODAL FOR VIDEO WORKFLOW */}
            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Choose a Video</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        type="file"
                        accept="video/*"
                        className="form-control"
                        onChange={(e) => {
                            const file = e.target.files[0];
                            console.log('Selected file:', file);
                        }}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => alert('File selected successfully!')}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Sidebar;
