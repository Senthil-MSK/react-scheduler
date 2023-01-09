import { render, screen } from "@testing-library/react";
import CalendarEvents from "./CalendarEvents";

describe("Calendar Events", () => {
  test("canlendar Events Render Correctly", () => {
    render(<CalendarEvents />);
    const allButton = screen.getByRole("button", { name: "All" });
    expect(allButton).toBeInTheDocument();
    expect(allButton).not.toBeDisabled();

    const tasksButton = screen.getByRole("button", { name: "Tasks" });
    expect(tasksButton).toBeInTheDocument();
    expect(tasksButton).toBeDisabled();

    const meetingsButton = screen.getByRole("button", { name: "Meetings" });
    expect(meetingsButton).toBeInTheDocument();
    expect(meetingsButton).toBeDisabled();

    const remaindersButton = screen.getByRole("button", { name: "Remainders" });
    expect(remaindersButton).toBeInTheDocument();
    expect(remaindersButton).toBeDisabled();
  });
});
