import { render, screen } from "@testing-library/react"
import Greet from "./greet"

test('Greet render correctly', () => {
    render(<Greet />);
    const textElement = screen.getByText(/Hello/i);
    expect(textElement).toBeInTheDocument();
});

test('Greet render with a name', () => {
    render(<Greet name="Sachin" />);
    const textElement = screen.getByText(/Hello Sachin/i);
    expect(textElement).toBeInTheDocument();
})