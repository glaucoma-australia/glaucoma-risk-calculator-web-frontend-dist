import { AuthGuard } from '../api/auth/auth-guard.service';
import { UsersComponent } from './users.component';
export var usersRoutes = [
    { path: 'admin/users', component: UsersComponent, canActivate: [AuthGuard] }
];
//# sourceMappingURL=/home/samuel/repos/glaucoma_risk_calculator/glaucoma-risk-calc-web-frontend/src/src/app/users/users.routes.js.map