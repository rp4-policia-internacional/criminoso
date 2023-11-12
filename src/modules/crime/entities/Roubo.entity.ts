import CrimeEntity from "../entities/Crime.entity";

class RouboEntity implements CrimeEntity {
    
    // Implementação dos métodos abstratos específicos para o crime de roubo.
    recordCrime(): void {
      console.log(`Registro do crime de roubo:}, Tipo:}, Status: `);
    }

  }