import ParentRouter from "./components/parentrouter";

import { FormProvider } from "./contextApi/selectelement_context";

const App = () => {
  return (
    <>
      {/* for importing parentRouter component below */}
      <FormProvider>
        <ParentRouter />
      </FormProvider>
    </>
  );
};

export default App;
