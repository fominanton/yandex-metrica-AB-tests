import RenderAB from "./components/renderAB";
import Section1 from "./components/section/section1";
import Section2 from "./components/section/section2";

function App() {
    return (
        <>
            <RenderAB name={"test1"}
                      group={[
                          {name: "section1", content: <Section1/>},
                          {name: "section2", content: <Section2/>},
                      ]}/>
        </>
    );
}

export default App;
