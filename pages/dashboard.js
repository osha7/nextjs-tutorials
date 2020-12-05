import Header from '../components/header'

const Dashboard = ({name, company, blog}) => {
    // console.log(props)
    return (
        <>
            <Header />
            <h1>{name}</h1>
            <p>{`Position: ${company}`}</p>
            <p>{`Website: ${blog}`}</p>
        </>
    )
}

Dashboard.getInitialProps = async () => {
    const res = await fetch("https://api.github.com/users/osha7")
    const dashboard = res.json();

    return dashboard;
}

export default Dashboard;

