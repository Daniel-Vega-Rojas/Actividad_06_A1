// import { Habitacion } from '../models/habitacion';
import { HabitacionRoutes } from './habitacion';
import { UserRoutes } from './user';
export class Routes {
    public userRoutes: UserRoutes = new UserRoutes();
    public habitacionRoutes: HabitacionRoutes = new HabitacionRoutes();
}

