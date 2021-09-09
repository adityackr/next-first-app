import { useRouter } from 'next/router';

const ClientProjectPage = () => {
    const router = useRouter();

    console.log(router.query);

    const loadProjectHandler = () => {
        router.push({
            pathname: '/clients/[id]/[clientProjectId]',
            query: { id: 'adi', clientProjectId: 'projecta' },
        });
    };

    return (
        <div>
            <h1>The project page of a given client</h1>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    );
};

export default ClientProjectPage;
