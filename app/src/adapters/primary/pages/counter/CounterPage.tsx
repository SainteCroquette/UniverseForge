import Page from "@components/page/Page.tsx";
import Counter from "@components/Counter.tsx";

const CounterPage = (): JSX.Element => {
    return (
        <Page defaultSideMenuMode={'collapsed'}>
            <Counter />
        </Page>
    );
};

export default CounterPage;
