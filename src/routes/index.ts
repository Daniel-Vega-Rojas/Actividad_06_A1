// import { Habitacion } from '../models/habitacion';
import { HabitacionRoutes } from './habitacion';
import { PersonaRoutes } from './persona';
import { AgenciaRoutes } from './agencia';
import { CategoriaRoutes } from './categoria';
import { HotelRoutes } from './hotel';
import { ReservaRoutes} from './reserva'

export class Routes {
    
    public habitacionRoutes: HabitacionRoutes = new HabitacionRoutes();
    public personaRoutes: PersonaRoutes = new PersonaRoutes();
    public agenciaRoutes: AgenciaRoutes = new AgenciaRoutes();
    public categoriaRoutes: CategoriaRoutes = new CategoriaRoutes();
    public hotelRoutes: HotelRoutes = new HotelRoutes();
    public reservaRoutes: ReservaRoutes =new ReservaRoutes();
    
}