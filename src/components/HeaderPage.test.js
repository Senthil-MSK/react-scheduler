import { render, screen } from "@testing-library/react";
import Calendar from "./calendar";
import HeaderPage from "./HeaderPage";

test("HeaderPage Render", () => {
  render(<HeaderPage />);
  const textToBeInScreen = screen.getByText("Calendar");
  expect(textToBeInScreen).textToBeInScreen();
  //   expect(screen.getByRole("div")).toHaveTextContent("Calendar");
  //   expect(screen.getByRole("button")).not.toBeDisabled();
});
