import { render, renderHook, screen } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import App from "./App";
import { useCalenderData } from "./hooks/useCalenderData";

const onSuccess = (data) => {
  console.log("ON success Method call", data.data.data);
};

const onError = (error) => {
  console.log("On Error method call", error);
};

test("renders learn react link", async () => {
  render(<App />);
  const initialValue = [];
  const mock = new MockAdapter(axios);

  const mockData = "response";
  const url = "http://mock";
  mock.onGet(url).reply(200, mockData);

  const { result, waitForNextUpdate } = renderHook(() =>
    useCalenderData(onSuccess, onError)
  );

  expect(result.current.data).toEqual([]);
  expect(result.current.loading).toBeTruthy();

  expect(result.current.data).toEqual("response");
  expect(result.current.loading).toBeFalsy();
});
