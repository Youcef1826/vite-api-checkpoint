import { useEffect, useState } from "react";
import axios from "axios";

export default function UserList() {
    const [listOfUsers, setListOfUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {

            try {
                const res = await axios.get("https://jsonplaceholder.typicode.com/users");
                setListOfUsers(res.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false)
            }
        }
        getData();
    }, []);

    if (loading) {
        return <p>Loading ...</p>;
    }

    if (error) {
        return <p>Error fetching data: {error.message}</p>;
    }

    return (
        <>
        <ul>
            {listOfUsers.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
        </>
    )
}