import { render, screen } from "@testing-library/react"
import Greet from "./greet"

describe('Greet', () => {
    test('render correctly', () => {
        render(<Greet />);
        const textElement = screen.getByText(/Hello/i);
        expect(textElement).toBeInTheDocument();
    });
})

describe('Nested', () => {
    test('render a name', () => {
        render(<Greet name="Sachin" />);
        const textElement = screen.getByText(/Hello Sachin/i);
        expect(textElement).toBeInTheDocument();
    })
})
