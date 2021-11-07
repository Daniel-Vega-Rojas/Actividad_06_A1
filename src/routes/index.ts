// import { Habitacion } from '../models/habitacion';
import { HabitacionRoutes } from './habitacion';
import { UserRoutes } from './user';
import { PersonaRoutes } from './persona';
import { AgenciaRoutes } from './agencia';
import { CategoriaRoutes } from './categoria';
import { SaleRoutes } from './sale';
// import { Hotel } from '../models/hotel';
import { HotelRoutes } from './hotel';
import { ReservaRoutes} from './reserva'
import { ProductRoutes } from './product';
export class Routes {
    public userRoutes: UserRoutes = new UserRoutes();
    public habitacionRoutes: HabitacionRoutes = new HabitacionRoutes();
    public personaRoutes: PersonaRoutes = new PersonaRoutes();
    public agenciaRoutes: AgenciaRoutes = new AgenciaRoutes();
    public categoriaRoutes: CategoriaRoutes = new CategoriaRoutes();
    public saleRoutes: SaleRoutes = new SaleRoutes();
    public hotelRoutes: HotelRoutes = new HotelRoutes();
    public reservaRoutes: ReservaRoutes =new ReservaRoutes();
    public productRoutes: ProductRoutes = new ProductRoutes();
}