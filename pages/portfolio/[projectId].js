import { useRouter } from 'next/router';

const ProtfolioProjectPage = () => {
    const router = useRouter();

    console.log(router.pathname);
    console.log(router.query);

    return (
        <div>
            <h1>The Project page</h1>
        </div>
    );
};

export default ProtfolioProjectPage;
