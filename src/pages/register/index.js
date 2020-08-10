import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { Form, Col } from 'react-bootstrap'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'

import logoImg from '../../assets/logo-alliance-azul.PNG';
import './styles.css'

export default function Register() {
    const [codigo, setCodigo] = useState('');
    const [dominio, setDominio] = useState('')
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
    const [torre, setTorre] = useState('')

    const history = useHistory();

    async function handleCadastro(e) {
        e.preventDefault()

        const data = {
            codigo,
            dominio,
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

                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="codigo">
                            <Form.Control
                                type="text"
                                name="codigo"
                                placeholder="Código"
                                value={codigo}
                                onChange={e => setCodigo(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="torre">
                            <Form.Control
                                type="text"
                                name="torre"
                                placeholder="Torre"
                                value={torre}
                                onChange={e => setTorre(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="status">
                            <Form.Control
                                type="text"
                                name="status"
                                placeholder="Status"
                                value={status}
                                onChange={e => setStatus(e.target.value)}
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="allocated">
                            <Form.Control
                                type="text"
                                name="allocated"
                                placeholder="Alocada com"
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="fabricante">
                            <Form.Control
                                type="text"
                                name="fabricante"
                                placeholder="Fabricante"
                                value={fabricante}
                                onChange={e => setFabricante(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="ip">
                            <Form.Control
                                type="text"
                                name="ip"
                                placeholder="IP"
                                value={ip}
                                onChange={e => setIp(e.target.value)}
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="modelo">
                            <Form.Control
                                type="text"
                                name="modelo"
                                placeholder="Modelo"
                                value={modelo}
                                onChange={e => setModelo(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="numSerie">
                            <Form.Control
                                type="text"
                                name="numSerie"
                                placeholder="Número de série"
                                value={numSerie}
                                onChange={e => setNumSerie(e.target.value)}
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="versaoOS">
                            <Form.Control
                                type="text"
                                name="versaoOS"
                                placeholder="Sistema operacional"
                                value={versaoOS}
                                onChange={e => setVersaoOS(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="chaveWindows">
                            <Form.Control
                                type="text"
                                name="chaveWindows"
                                placeholder="Chave de ativação"
                                value={chaveWindows}
                                onChange={e => setChaveWindows(e.target.value)}
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="versaoOffice">
                            <Form.Control
                                type="text"
                                name="versaoOffice"
                                placeholder="Versão do Office"
                                value={versaoOffice}
                                onChange={e => setVersaoOffice(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="chaveOffice">
                            <Form.Control
                                type="text"
                                name="chaveOffice"
                                placeholder="Chave de ativação"
                                value={chaveOffice}
                                onChange={e => setChaveOffice(e.target.value)}
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Control
                            as="textarea"
                            className="textarea"
                            placeholder="Observação"
                            name="obs"
                            value={obs}
                            onChange={e => setObs(e.target.value)}
                        />
                    </Form.Row>
                </Form>
            </div>
        </div>
    )
}