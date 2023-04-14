import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Header, HeaderInfo, BodyContainer, Table, TableHeader, SmallCell, BigCell, TableLine, TinyCell } from './styleHomePage'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { GrFormAdd } from "react-icons/gr"
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { FcViewDetails } from "react-icons/fc"

export default function HomePage({setEditID}){
    const [itemList, setItemList] = useState([]);
    const navigate = useNavigate()
    const [detalhesItens, setDetalhesItens] = useState({});

    useEffect(() => {
        const promise = axios.get('http://localhost:3000/produtos')
        promise.then((res) => {
            setItemList(res.data)
            console.log(res.data)
        })
        promise.catch((err) => console.log(err.response.data))
    }, [])
   
    function excluir(id){
        console.log(id)
        const promise = axios.delete(`http://localhost:3000/produtos/${id}`)
        promise.then((res) => {
            axios.get('http://localhost:3000/produtos')
            .then((res) => setItemList(res.data))
            .catch((err) => alert("Não foi possível atualizar a página automaticamente!"))
            (window.location.reload)
        })
        promise.catch((err) => alert("Não foi possível excluir o item!"))
    }
    function editar(id){
        setEditID(id)
        navigate("/editar-item")
    }
    const AddItem = () => {
        return(
            <div style={{fontSize: '1.5em'}}>
                <GrFormAdd />
            </div>
        )
    }
    function mostrarDetalhes(item) {
        setDetalhesItens((prev) => ({
          ...prev,
          [item._id]: {
            preco: item.preco,
            data_cadastro: item.data_cadastro,
          },
        }));
      }
      
      function esconderDetalhes(item) {
        setDetalhesItens((prev) => {
          const newDetalhes = { ...prev };
          delete newDetalhes[item._id];
          return newDetalhes;
        });
      }
      
    return(
        <Container>
            <Header>
            <HeaderInfo>
                Server Softwares
            </HeaderInfo>
            </Header>
        <BodyContainer>
           <Table>
                <TableHeader>
                    
                    <SmallCell>
                         <Link to='novo-item'>
                            {<AddItem />}
                        </Link>
                    </SmallCell>
                    <SmallCell>Código</SmallCell>
                    <BigCell>Descrição</BigCell>
                    <TinyCell>Detalhes</TinyCell>
                </TableHeader>
            
                {itemList.map((i) => (
                    <TableLine key={i._id}>
                        <SmallCell>
                        <button onClick={() => editar(i._id)}>
                            <AiFillEdit />
                        </button>
                        <button onClick={() => excluir(i._id)}>
                            <AiFillDelete />
                        </button>
                        </SmallCell>
                        <SmallCell>{i.codigo}</SmallCell>
                        <BigCell>{i.descricao}</BigCell>
                        <TinyCell>
                        {detalhesItens[i._id] ? (
                            <>
                            <BigCell>R$ {detalhesItens[i._id].preco.toFixed(2)}</BigCell>
                            <BigCell>{detalhesItens[i._id].data_cadastro}</BigCell>
                            <BigCell>
                                <button onClick={() => esconderDetalhes(i)}>
                                {<FcViewDetails />}
                                </button>
                            </BigCell>
                            </>
                        ) : (
                            <button onClick={() => mostrarDetalhes(i)}>
                            {<FcViewDetails />}
                            </button>
                        )}
                        </TinyCell>
                    </TableLine>
                    ))}

                
           </Table>
        </BodyContainer>
    </Container>  
    )
}

