import "./style.css";
import Trash from "../../assets/16qg.svg";
import api from '../../services/api';

//trabalhando com dados mocados simulando resultados >> API

// const users = [
//   {
//     id: "test@teste",
//     name: "kdjaksd",
//     age: "33", //idade definida como string no inicio do projeto da API
//     email: "teste@teste.com",
//   },
//   {
//     id: "test@teste2",
//     name: "kdjaksd2",
//     age: "34", //idade definida como string no inicio do projeto da API
//     email: "teste2@teste2.com",
//   },
// ];

function Home() {

  const users = []

  async function getUsers() {
  }

  return (
    <>
      <div className="container">
        <form>
          <h1>Cadastro de usuários</h1>
          <input placeholder="Nome" name="nome" type="text" />
          <input placeholder="Idade" name="idade" type="text" />
          <input placeholder="Email" name="email" type="email" />
          <button type="button">Cadastrar</button>
        </form>

        {users.map((user) => (
          <div key={user.id} className="card">
            <div>
              <p>Nome: <span>{user.name}</span> </p>
              <p>Idade: <span>{user.age}</span> </p>
              <p>Email: <span>{user.email}</span> </p>
            </div>
            <button>
              <img src={Trash} />
            </button>
          </div>
        ))}

      </div>
    </>
  );
}

export default Home;
