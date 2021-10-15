// import { Habitacion } from '../models/habitacion';
import { HabitacionRoutes } from './habitacion';
import { UserRoutes } from './user';
import { PersonaRoutes } from './persona';
import { AgenciaRoutes } from './agencia';
import { CategoriaRoutes } from './categoria';
import { SaleRoutes } from './sale';
export class Routes {
    public userRoutes: UserRoutes = new UserRoutes();
    public habitacionRoutes: HabitacionRoutes = new HabitacionRoutes();
    public personaRoutes: PersonaRoutes = new PersonaRoutes();
    public agenciaRoutes: AgenciaRoutes = new AgenciaRoutes();
    public categoriaRoutes: CategoriaRoutes = new CategoriaRoutes();
    public saleRoutes: SaleRoutes = new SaleRoutes();
}

