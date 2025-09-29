(() => {
    const filesToEvaluate = [
        { id: 1, flagged: false },
        { id: 2, flagged: false },
        { id: 3, flagged: true },
        { id: 4, flagged: false },
        { id: 5, flagged: false },
        { id: 7, flagged: true },
    ]; 
    
   const filesToDelete = filesToEvaluate.map( file => file.flagged );

    // Malos
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };

    const today = new Date();
    
    const elapsedTimeInDays: number = 23;
    
    const numberOfFilesInDirectory = 33;
    
    const firstName = 'Nati';
    
    const lastName = 'Gise';

    const daysSinceLastModification = 12;
    
    const maxClassesPerStudent = 6;


})();



