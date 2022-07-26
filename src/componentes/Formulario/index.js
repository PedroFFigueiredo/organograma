import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'


const Formulario = () => {
    
    const times = [
        "Programação",
        "Front-end",
        "DataScience",
        "Devops",
        "UX e Design",
        "Mobile",
        "Inovação e Gestão"
    ]

    const aoSavar = (event) => {
        event.preventDefault();
        console.log("Formulario Enviado")
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSavar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu Nome" />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu Cargo" />
                <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />
                <ListaSuspensa label="Time" itens={times}/>
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario