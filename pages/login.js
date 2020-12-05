import { useRouter } from 'next/router';
import Header from '../components/header'

const Login = () => {
    const router = useRouter()

    const onLogin = (e) => {
        e.preventDefault()
        router.push('/dashboard')
        // ^^ redirect with .push
    }
    
    return (
        <>
            <Header />
            <input placeholder="User Name" />
            <input placeholder="Password" type="password" />
            <button type="button" onClick={onLogin}>
                Log In
            </button>
        </>
    )
}

export default Login;