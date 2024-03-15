import { getImagen as getImage } from "../../src/base-pruebas/11-async-await";



describe('Pruebas en 11-async-await', () => {

    test('getImage debe de retorar un URL de la imagen', async() => { 

        const url = await getImage();
        console.log(url);


        expect( typeof url ).toBe('string');

     });

 })