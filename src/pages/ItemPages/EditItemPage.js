import { Container, Header, Body, FormContainer, InputArea, Top, Codigo, Preco, Bottom, Descricao, ButtonArea, RegisterTable} from "./styleItemPage"
import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function EditItemPage({editID}){
    const [codigo, setCodigo] = useState('')
    const [preco, setPreco] = useState('')
    const [descricao, setDescricao] = useState('')

    const navigate = useNavigate()

    function addNewItem(e){
        e.preventDefault()
        const body = {codigo, preco, descricao}
        console.log(body)
        const promise = axios.put(`http://localhost:3000/produtos/${editID}`, body)
        promise.then(res => (
        navigate("/")
        
        ))
        promise.catch((err) => alert("Não foi possível editar o item!"))
    }
    function codigoChange(e) {
        setCodigo(e.target.value)
    }
    function precoChange(e) {
        setPreco(e.target.value)
    }
    function descricaoChange(e) {
        setDescricao(e.target.value)
    }
    
    return(
        <Container>
            <RegisterTable>
                <Header>
                    <Link to="/">
                        
                    </Link>
                    Editar Item
                </Header>
                <Body>
                    <FormContainer onSubmit={addNewItem}>
                        <InputArea>
                            <Top>
                            <Codigo>
                                Código 
                                <input value={codigo} onChange={codigoChange}></input>
                            </Codigo>
                            <Preco>
                                Preço (R$)
                                <input value={preco} onChange={precoChange}></input>
                            </Preco>
                            </Top>
                            <Bottom>
                            <Descricao>
                                Descrição
                                <input value={descricao} onChange={descricaoChange}></input>
                            </Descricao>
                            
                            </Bottom>
                        </InputArea>
                        <ButtonArea>
                            <button type="submit">Salvar</button>
                            <Link to="/"><button>Cancelar</button></Link>
                        </ButtonArea>
                    </FormContainer>
                </Body>
            </RegisterTable>
        </Container>
    )
}

