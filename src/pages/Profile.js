import {useDispatch, useSelector} from 'react-redux'
import {Button, makeStyles} from '@material-ui/core'
import {signout} from '../store/authSlice'

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default function Profile() {
  const s = useStyles()
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.auth.currentUser)
  const handleSignout = () => {
    dispatch(signout())
  }

  return (
    <div className={s.wrapper}>
      <h1>{currentUser}</h1>
      <Button
        variant='outlined'
        onClick={handleSignout}
      >
        Выйти
      </Button>
    </div>
  )
}
