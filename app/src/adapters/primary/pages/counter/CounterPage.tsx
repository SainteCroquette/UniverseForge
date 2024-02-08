import Page from "@templates/page/Page.tsx";
import CountersDemo from "@organisms/countersDemo/CountersDemo.tsx";

const CounterPage = (): JSX.Element => {
    return (
        <Page defaultSideMenuMode={'collapsed'}>
            <CountersDemo />
        </Page>
    );
};

export default CounterPage;
