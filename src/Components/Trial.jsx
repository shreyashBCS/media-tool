import React from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faMoneyBillAlt, faEye, faEnvelope, faCalendar, faStopwatch, faEnvelopeOpenText, faThumbsUp, faReplyAll, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Dashboard = () => {
    return (
        <div className="content" style={{ backgroundColor: "#F4F6FA" }}>
            <Container>
                <Row>
                    <Col md={12} className="page-header">
                        <div className="page-pretitle">Overview</div>
                        <h2 className="page-title">Dashboard</h2>
                    </Col>
                </Row>

                <Row>
                    {[
                        {
                            icon: faShoppingCart,
                            title: 'New Orders',
                            number: '6,267',
                            footer: 'For this Week'
                        },
                        {
                            icon: faMoneyBillAlt,
                            title: 'Revenue',
                            number: '$180,900',
                            footer: 'For this Month'
                        },
                        {
                            icon: faEye,
                            title: 'Page Views',
                            number: '28,210',
                            footer: 'For this Month'
                        },
                        {
                            icon: faEnvelope,
                            title: 'Support Requests',
                            number: '75',
                            footer: 'For this Week'
                        }
                    ].map((item, idx) => (
                        <Col sm={6} md={6} lg={3} className="mt-3 mb-5" key={idx}>
                            <Card>
                                <Card.Body>
                                    <Row>
                                        <Col sm={4} className="text-center">
                                            <FontAwesomeIcon icon={item.icon} size="2x" />
                                        </Col>
                                        <Col sm={8}>
                                            <h6 className="detail-subtitle">{item.title}</h6>
                                            <h4>{item.number}</h4>
                                        </Col>
                                    </Row>
                                    <hr />
                                    <div className="stats">
                                        <FontAwesomeIcon icon={faCalendar} /> {item.footer}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <Row>
                    <Col md={6} className='mb-5'>
                        <Card>
                            <Card.Body>
                                <Card.Title>Traffic Overview</Card.Title>
                                <Card.Text>Current year website visitor data</Card.Text>
                                <div className="canvas-wrapper">
                                    <canvas id="trafficflow"></canvas>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Sales Overview</Card.Title>
                                <Card.Text>Current year sales data</Card.Text>
                                <div className="canvas-wrapper">
                                    <canvas id="sales"></canvas>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col md={6} className='mb-5'>
                        <Card>
                            <Card.Body>
                                <Card.Title>Top Visitors by Country</Card.Title>
                                <Table striped>
                                    <thead>
                                        <tr>
                                            <th>Country</th>
                                            <th className="text-end">Unique Visitors</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { country: 'United States', visitors: '27,340' },
                                            { country: 'India', visitors: '21,280' },
                                            { country: 'Japan', visitors: '18,210' },
                                            { country: 'United Kingdom', visitors: '15,176' },
                                            { country: 'Spain', visitors: '14,276' }
                                        ].map((item, idx) => (
                                            <tr key={idx}>
                                                <td>{item.country}</td>
                                                <td className="text-end">{item.visitors}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Most Visited Pages</Card.Title>
                                <Table striped>
                                    <thead>
                                        <tr>
                                            <th>Page Name</th>
                                            <th className="text-end">Visitors</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { page: '/about.html', visitors: '8,340' },
                                            { page: '/special-promo.html', visitors: '7,280' },
                                            { page: '/products.html', visitors: '6,210' },
                                            { page: '/documentation.html', visitors: '5,176' },
                                            { page: '/documentation.html', visitors: '5,176' },

                                        ].map((item, idx) => (
                                            <tr key={idx}>
                                                <td>{item.page}</td>
                                                <td className="text-end">{item.visitors}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    {[
                        {
                            icon: faThumbsUp,
                            title: 'Facebook Page Likes',
                            number: '+21,900'
                        },
                        {
                            icon: faReplyAll,
                            title: 'Instagram Followers',
                            number: '+22,566'
                        },
                        {
                            icon: faEnvelope,
                            title: 'E-Mail Subscribers',
                            number: '+15,566'
                        },
                        {
                            icon: faDollarSign,
                            title: 'Total Sales',
                            number: '+98,601'
                        }
                    ].map((item, idx) => (
                        <Col sm={6} md={6} lg={3} key={idx}>
                            <Card>
                                <Card.Body className="text-center">
                                    <FontAwesomeIcon icon={item.icon} size="2x" className="mb-2" />
                                    <h4>{item.number}</h4>
                                    <p className="text-muted">{item.title}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Dashboard;
