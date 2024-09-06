import "./style.css";
import Trash from "../../assets/16qg.svg";

//trabalhando com dados mocados simulando resultados >> API

const users = [
  {
    id: "test@teste",
    name: "kdjaksd",
    age: "33", //idade definida como string no inicio do projeto da API
    email: "teste@teste.com",
  },
  {
    id: "test@teste2",
    name: "kdjaksd2",
    age: "34", //idade definida como string no inicio do projeto da API
    email: "teste2@teste2.com",
  },
];

function Home() {
  return (
    <>
      <div className="container">
        <form>
          <h1>Cadastro de usuários</h1>
          <input name="nome" type="text" />
          <input name="idade" type="number" />
          <input name="email" type="email" />
          <button type="button">Cadastrar</button>
        </form>

        {users.map((user) => (
          <div key={user.id}>
            <div>
              <p>Nome: {user.name} </p>
              <p>Idade: {user.age} </p>
              <p>Email: {user.email} </p>
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
