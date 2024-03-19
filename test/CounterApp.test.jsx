import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("Test del CounterApp", () => {
    test("Debe de hacer Match con el snapshot", () => {
        const { container } = render(<CounterApp value={10} />);

        expect(container).toMatchSnapshot();
    });

    //test: debe de mostrar el valor inicial de 100 <CounterApp value{100}>
    test("Debe de mostrar el valor inicial de 100", () => {
        const valueContainer = 100;
        render(<CounterApp value={valueContainer} />);

        expect(screen.getByText(100)).toBeTruthy();
    });

    test("debe de incrementar con el botón +1", () => {
        render(<CounterApp value={10} />);
        fireEvent.click(screen.getByText("+1"));
        expect(screen.getByText("11")).toBeTruthy();
    });

    test("debe de decrementar con el botón -1", () => {
        render(<CounterApp value={10} />);
        fireEvent.click(screen.getByText("-1"));
        expect(screen.getByText("9")).toBeTruthy();
    });

    test("Debe de funcionar el boton de reset", () => {
        render(<CounterApp value={10} />);
        fireEvent.click(screen.getByText("+1"));
        fireEvent.click(screen.getByText("+1"));
        fireEvent.click(screen.getByText("+1"));
        // fireEvent.click(screen.getByText("Reset"));
        fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));

        expect(screen.getByText(10)).toBeTruthy();
    });
});
