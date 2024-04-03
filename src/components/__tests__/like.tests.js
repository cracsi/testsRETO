import { fireEvent} from "@testing-library/react";
import {render, screen } from "@testing-library/react";
import Like from "../like"


test("Check increment in like click", () => {
    render(<Like></Like>);
    const increment = screen.getByTestId("increment");
    const p = screen.getByTestId("likes");
    fireEvent.click(increment)
    expect(p.innerHTML).toBe("Likes: 1");
});
test("Check Likes: 0 by default", () => {
    render(<Like></Like>);
    const p = screen.getByTestId("likes");
    expect(p.innerHTML).toBe("Likes: 0");
});
test("Check decrement in like click", () => {
    render(<Like></Like>);
    const decrement = screen.getByTestId("decrement");
    const p = screen.getByTestId("likes");
    fireEvent.click(decrement)
    expect(p.innerHTML).toBe("Likes: -1");
});