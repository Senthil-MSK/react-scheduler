import "./App.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import Calendar from "./components/calendar";

const queryClient = new QueryClient();

function App() {
  // fetch("https://demo-api.digialpha.cloud/api/calender-demo")
  //   .then((response) => response.json())
  //   .then((json) => console.log(json.data));

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Calendar startingDate={new Date()} />
        {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
      </QueryClientProvider>
    </div>
  );
}

export default App;
