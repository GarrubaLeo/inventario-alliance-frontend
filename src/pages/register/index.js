import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { Form, Row, ButtonGroup, Label, Control, Col, Tabs, Tab } from 'react-bootstrap'

import api from '../../services/api'

import logoImg from '../../assets/logo-alliance-azul.PNG';
import './styles.css'

export default function Register() {
    const [codigo, setCodigo] = useState('');
    const [torre, setTorre] = useState('')
    const [ip, setIp] = useState('')
    const [fabricante, setFabricante] = useState('')
    const [modelo, setModelo] = useState('')
    const [numSerie, setNumSerie] = useState('')
    const [versaoOS, setVersaoOS] = useState('')
    const [chaveWindows, setChaveWindows] = useState('')
    const [versaoOffice, setVersaoOffice] = useState('')
    const [chaveOffice, setChaveOffice] = useState('')
    const [status, setStatus] = useState('')
    const [obs, setObs] = useState('')
    const [alocadoCom, setAlocadoCom] = useState('');

    const history = useHistory();

    async function handleCadastro(e) {
        e.preventDefault()

        const data = {
            codigo,
            torre,
            ip,
            fabricante,
            modelo,
            numSerie,
            versaoOS,
            chaveWindows,
            versaoOffice,
            chaveOffice,
            status,
            obs,
            alocadoCom
        }

        try {
            await api.post('computers/new', data)
            alert('Cadastro realizado com sucesso')
            history.push('/computers/main')
        } catch (error) {
            alert('Erro ao cadastrar, tente novamente')
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Alliance Consultoria" />
                    <h1>Cadastrar novo ativo</h1>
                    <Link className="back-link" to="/computers/main">
                        <FiArrowLeft size={15} color="#1DC6BC" />
                        Voltar para home
                    </Link>
                </section>

                <div>
                    <Tabs style={{ marginBottom: '20px' }} defaultActiveKey="control" id="uncontrolled-tab-example">
                        <Tab eventKey="control" title="Controle Interno">
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="Codigo">
                                        <Form.Label>Código</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="codigo"
                                            required
                                            value={codigo}
                                            onChange={e => setCodigo(e.target.value)}
                                        >
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="Torre">
                                        <Form.Label>Torre</Form.Label>

                                        <Form.Control
                                            type="text"
                                            name="torre"
                                            required
                                            value={torre}
                                            onChange={e => setTorre(e.target.value)}
                                        >
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="Status">
                                        <Form.Label>Status</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="status"
                                            required
                                            value={status}
                                            onChange={e => setStatus(e.target.value)}
                                        >
                                        </Form.Control>
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                    <Form.Group as={Col} controlId="AlocadoCom">
                                        <Form.Label>Alocada com</Form.Label>

                                        <Form.Control
                                            type="text"
                                            name="alocadoCom"
                                            required
                                            value={alocadoCom}
                                            onChange={e => setAlocadoCom(e.target.value)}
                                        >
                                        </Form.Control>
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                    <Form.Label>Observação</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        name="obs"
                                        value={obs}
                                        onChange={e => setObs(e.target.value)}
                                    />
                                </Form.Row>
                            </Form>
                        </Tab>

                        <Tab eventKey="technical" title="Ficha técnica">
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="Ip">
                                        <Form.Label>IP</Form.Label>

                                        <Form.Control
                                            type="text"
                                            name="ip"
                                            required
                                            value={ip}
                                            onChange={e => setIp(e.target.value)}
                                        >
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="numSérie">
                                        <Form.Label>Nº de Série</Form.Label>

                                        <Form.Control
                                            type="text"
                                            name="numSerie"
                                            required
                                            value={numSerie}
                                            onChange={e => setNumSerie(e.target.value)}
                                        >
                                        </Form.Control>
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                    <Form.Group as={Col} controlId="Fabricante">
                                        <Form.Label>Fabricante</Form.Label>

                                        <Form.Control
                                            type="text"
                                            name="fabricante"
                                            required
                                            value={fabricante}
                                            onChange={e => setFabricante(e.target.value)}
                                        >
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="Modelo">
                                        <Form.Label>Modelo</Form.Label>

                                        <Form.Control
                                            type="text"
                                            name="modelo"
                                            required
                                            value={modelo}
                                            onChange={e => setModelo(e.target.value)}
                                        >
                                        </Form.Control>
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                    <Form.Group as={Col} controlId="VersaoOS">
                                        <Form.Label>Sistema Operacional</Form.Label>

                                        <Form.Control
                                            type="text"
                                            name="versaoOS"
                                            required
                                            value={versaoOS}
                                            onChange={e => setVersaoOS(e.target.value)}
                                        >
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="chaveWindows">
                                        <Form.Label>Chave Windows</Form.Label>

                                        <Form.Control
                                            type="text"
                                            name="chaveWindows"
                                            required
                                            value={chaveWindows}
                                            onChange={e => setChaveWindows(e.target.value)}
                                        >
                                        </Form.Control>
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                    <Form.Group as={Col} controlId="VersaoOffice">
                                        <Form.Label>Versão Office</Form.Label>

                                        <Form.Control
                                            type="text"
                                            name="versaoOffice"
                                            required
                                            value={versaoOffice}
                                            onChange={e => setVersaoOffice(e.target.value)}
                                        >
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="chaveOffice">
                                        <Form.Label>Chave Office</Form.Label>

                                        <Form.Control
                                            type="text"
                                            name="chaveOffice"
                                            required
                                            value={chaveOffice}
                                            onChange={e => setChaveOffice(e.target.value)}
                                        >
                                        </Form.Control>
                                    </Form.Group>
                                </Form.Row>
                            </Form>
                        </Tab>
                    </Tabs>

                    <button
                        className="button-default"
                        onClick={handleCadastro}
                    >
                        Cadastrar
                    </button>
                </div>
            </div>
        </div>
    )
}