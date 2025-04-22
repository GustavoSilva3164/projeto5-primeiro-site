import Image from '../public/react.png'


export default function App(){
  return (
    <div>
      <img src={Image} alt="" />
      <h1>React</h1>
      <p>A blibioteca para interfaces de usuário web e nativas</p>
      <button>aprenda react</button>
      <button>referencia da API</button>
      <hr />
      <h2>Crie interfaces de usuário de componentes</h2>
      <p>React permite que você construa interfaces de usuário a partir de pedaços individuais chamados componentes.</p>
      <h2>Escreva componentes com código e marcação</h2>
      <p>componentes React são funções JavaScript A sintaxe é chamada de JSX é uma extenção do JavaScript popularizada pelo React</p>
      <hr />
      <h2>Próximos passos</h2>
      <ul>
        <li>Uso de dados dinamicos no JSX</li>
        <li>Criação de novos componentes</li>
        <li>Estilização de componentes</li>
        <li>Reutilização de componentes</li>
        <li>Uso de props e children</li>
        <li>Uso de eventos do JavaScrips</li>
      
      </ul>
    </div>
  )
}