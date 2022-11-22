import { gql, useMutation } from '@apollo/client'
import { NavLink, useHistory } from "react-router-dom";

const getLogin = gql`
  mutation SigIn($input: SignInInput!) {
    signIn(input: $input) {
      token
      user {
        email
        name
      }
    }
  }
`
type LoginData = {
  signIn: {
    token: string
    user: [
      {
        email: string
        name: string
      }
    ]
  }
}

export default function PageLogin() {
  // const { loading, error, data } = useMutation<LoginData>(getLogin, {
  //   variables: { input }
  // })

  // const history = useHistory();



  // const navigate = useNavugate();
  // const [password, setPassord] = useState("")
  // const [ email, setEmail] = useState

  // if (loading) return <h1>'Submitting...'</h1>
  // if (error) return <h1>`Submission error! ${error.message}`</h1>
  // if (!data) return <p>data</p>

  // const { signIn } = data
  // console.log(data)

  return (
    <div className="container">
      <main>
        <div className="main-content">
          <header className="container-header">
            <h1 className="academy-text">Academy</h1>
            <h1 className="story-text">Store</h1>
          </header>
          <div className="container-login">
            <div className="login-box">
              <div className="login-title">
                <p>Olá, entre com e-mail e senha.</p>
              </div>
              <form>
                <div className="login-input">
                  <div className="email">
                    <p className="email-title">Seu e-mail</p>
                    <input
                      type="email"
                      placeholder="exemplo@gmail.com"
                      className="email-input"
                    />
                  </div>
                  <div className="password">
                    <div className="campo-text">
                      <p className="password-title">Senha</p>
                      <a className="recover-password" href="/">
                        Esqueci minha senha
                      </a>
                    </div>

                    <input
                      type="password"
                      placeholder="Digite sua senha"
                      className="password-input"
                    />
                  </div>
                  <div className="mantenha-conectado">
                    <input type="checkbox" className="checkbox-input" />
                    <p className="checkbox-text">Manter conectado</p>
                  </div>
                  <div className="enter-container">
                    <button  className="enter-button">Entrar</button>
                  </div>
                </div>
              </form>
              <div className="registration-container">
                <p className="registration">Não possui conta? Cadastre-se!</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
