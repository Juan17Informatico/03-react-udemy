describe("Pruebas en <DemoComponent />", () => {
    test("Esta prueba no debe fallar", () => {
        // 1. Inicialización
        const message1 = "HOla mundo";

        // 2. Estimulo
        const message2 = message1.trim();
        // 3. Obeservar el comportamiento... esperado

        expect(message2).toBe(message1);
    });
});
