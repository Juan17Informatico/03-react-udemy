/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en <FirstApp />", () => {
    // test("debe de hacer match con el snapshot", () => {
    //     const title = "Hola, Soy Goku";
    //     const { container } = render(<FirstApp title={title} />);
    //     // console.log(container);

    //     expect(container).toMatchSnapshot();
    // });

    test("debe de mostrar el titulo en un h1", () => {
        const title = "Hola, Soy Goku";
        const { container, getByText, getByTestId } = render(<FirstApp title={title} />);

        expect(getByText(title)).toBeTruthy();

        expect(getByTestId('test-title').innerHTML).toContain(title);

        // const h1 = container.querySelector("h1");
        // expect(h1.innerHTML).toContain(title);
    });


    test('debe de mostrar el subitutlo enviado por props', () => { 

        const title = 'Hola, Soy Goku'; 
        const subTitle = 'Soy un subtitulo'; 
        const { getAllByText } = render(
            <FirstApp 
                title={title} 
                subTitle= { subTitle } 
            />);


        expect(getAllByText(subTitle).length).toBe(2);
    });

});
