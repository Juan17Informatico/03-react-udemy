import { render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";


describe('Test del CounterApp', () => { 

    test('Debe de hacer Match con el snapshot', () => { 

        const { container } = render(<CounterApp  value={10}/>)

        expect(container).toMatchSnapshot();
    }); 

    //test: debe de mostrar el valor inicial de 100 <CounterApp value{100}>
    test('Debe de mostrar el valor inicial de 100', () => { 

        const valueContainer = 100;
        render(<CounterApp  value={valueContainer}/>)

        expect( screen.getByText(100)).toBeTruthy();

     });
}); 