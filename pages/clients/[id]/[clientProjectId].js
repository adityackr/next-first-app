import { useRouter } from 'next/router';

const SelectedClientProjectPage = () => {
    const router = useRouter();

    console.log(router.query);

    return (
        <div>
            <h1>The project page of a specific project of given client</h1>
        </div>
    );
};

export default SelectedClientProjectPage;
