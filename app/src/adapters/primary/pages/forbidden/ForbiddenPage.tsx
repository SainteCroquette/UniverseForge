import Page from "@templates/page/Page.tsx";

const ForbiddenPage = (): JSX.Element => {
    return (
        <Page>
            <h1>Forbidden</h1>
            <p>Sorry, you are not allowed to access this page.</p>
        </Page>
    );
};

export default ForbiddenPage;
