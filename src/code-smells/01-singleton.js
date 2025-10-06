/*
Acrónimos STUPID
Code Smells que debemos evitar.

Singleton: patrón singleton.
Tight Coupling: alto acoplamiento.
Untestability: código no probable (unit test).
Premature optimization: optimizaciones prematuras.
Indescriptive Naming: nombres poco descriptivos.
Duplication: duplicidad de código, no aplicar el principio DRY.

*/


const Singleton = (function () {
    
    let instance;

    function createInstance() {
        return new Object('I am the instance');
    }

    return {
        getInstance() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

function main() {

    const instance1 = Singleton.getInstance();
    const instance2 = Singleton.getInstance();

    console.log('Misma instancia? ', (instance1 === instance2));
}

main();

// Ejecutar node src/code-smells/01-singleton.js