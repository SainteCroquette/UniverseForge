import Page from "@templates/page/Page.tsx";
import Counter from "@molecules/counter/Counter.tsx";

const CounterPage = (): JSX.Element => {
    return (
        <Page defaultSideMenuMode={'collapsed'}>
            <Counter />
        </Page>
    );
};

export default CounterPage;
