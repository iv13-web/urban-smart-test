import {Button, Container, makeStyles, TextField} from '@material-ui/core'
import {checkCredentialsValidity, signin} from '../store/authSlice'
import {useDispatch, useSelector} from 'react-redux'
import useUpdatedEffect from '../hooks/useUpdatedEffect'
import {useHistory} from 'react-router-dom'
import {useState} from 'react'

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  }
}))

export default function Home() {
  const s = useStyles()
  const history = useHistory()
  const [credentials, setCredentials] = useState({
    login: '',
    password: ''
  })
  const {login, password} = credentials
  const dispatch = useDispatch()
  const validCredentials = useSelector(state => {
    return state.auth.enteredCredentialsValidity
  })

  useUpdatedEffect(() => {
    dispatch(checkCredentialsValidity({login, password}))
  }, [login, password])

  const handleInputChange = ({target}) => {
    return setCredentials(prevState => ({
      ...prevState,
      [target.name]: target.value
    }))
  }

  const handleSubmit = () => {
    dispatch(signin(login))
    history.replace('/profile')
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className={s.paper}>
        <form className={s.form} noValidate onSubmit={handleSubmit}>
          <TextField
            autoFocus
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name='login'
            label="Логин"
            value={login}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name='password'
            label="Пароль"
            value={password}
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={s.submit}
            disabled={!validCredentials}
          >
            войти
          </Button>
        </form>
      </div>
    </Container>
  )
}
