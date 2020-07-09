import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
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

                <form onSubmit={handleCadastro} >
                    <div className="input-package">
                        <input
                            placeholder="Código"
                            style={{ width: 120 }}
                            value={codigo}
                            onChange={e => setCodigo(e.target.value)}
                        />

                        <input
                            placeholder="Domínio"
                            style={{ width: 123 }}
                            value={dominio}
                            onChange={e => setDominio(e.target.value)}
                        />
                        <input
                            placeholder="Status"
                            style={{ width: 190 }}
                            value={status}
                            onChange={e => setStatus(e.target.value)}
                        />
                    </div>

                    <div className="input-package">
                        <input
                            placeholder="Fabricante"
                            style={{ width: 250 }}
                            value={fabricante}
                            onChange={e => setFabricante(e.target.value)}
                        />
                        <input
                            placeholder="IP"
                            style={{ width: 190 }}
                            value={ip}
                            onChange={e => setIp(e.target.value)}
                        />
                    </div>

                    <div className="input-package">
                        <input
                            placeholder="Modelo"
                            style={{ width: 157 }}
                            value={modelo}
                            onChange={e => setModelo(e.target.value)}
                        />
                        <input
                            placeholder="N° de Série"
                            value={numSerie}
                            onChange={e => setNumSerie(e.target.value)}
                        />
                    </div>

                    <div className="input-package">
                        <input
                            placeholder="Versão Windows"
                            style={{ width: 185 }}
                            value={versaoOS}
                            onChange={e => setVersaoOS(e.target.value)}
                        />
                        <input
                            placeholder="Chave Windows"
                            style={{ width: 260 }}
                            value={chaveWindows}
                            onChange={e => setChaveWindows(e.target.value)}
                        />
                    </div>

                    <div className="input-package">
                        <input
                            placeholder="Versão Office"
                            style={{ width: 160 }}
                            value={versaoOffice}
                            onChange={e => setVersaoOffice(e.target.value)}
                        />
                        <input
                            placeholder="Chave Office"
                            value={chaveOffice}
                            onChange={e => setChaveOffice(e.target.value)}
                        />
                    </div>

                    <textarea
                        className="textarea"
                        placeholder="Adicione alguma observação"
                        value={obs}
                        onChange={e => setObs(e.target.value)}
                    />

                    <button
                        className="button-default"
                        type="submit"
                    >
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    )
}