import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe("Pruebas en 08-imp-exp", () => {
    test("getHeroByID debe de retornar un héroe por ID", () => {
        const id = 1;
        const hero = getHeroeById(id);

        expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
    });

    test("getHeroesByOwner debe de retornar undefined si no existe", () => {
        const id = 100;
        const hero = getHeroeById(id);

        expect( hero ).toBeFalsy();
    });

    //Tarea: 
    // Debe de retornar un arreglo con los héroes de DC
    // lenght === 3 
    // toEqual al arreglo filtrado


    // Debe de retornar un arreglo con los héres de Marvel 
    // length === 2

    test('getHeroesByOwner debe de retornar un arreglo con los héroes de DC', () => {
        
        const owner = "DC"; 
        const heroes = getHeroesByOwner(owner);



        expect(heroes.length).toEqual(3);
        heroes.forEach(hero => {
            expect(hero.owner).toEqual(owner);
        });
        
    });

    test('getHeroesByOwner debe de retornar un arreglo con los héroes de Marvel', () => {
        
        const owner = "Marvel"; 
        const heroes = getHeroesByOwner(owner);



        expect(heroes.length).toEqual(2);
        heroes.forEach(hero => {
            expect(hero.owner).toEqual(owner);
        });
        
    });

});
