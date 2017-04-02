import { AuthGuard } from '../api/auth/auth-guard.service';
import { UsersComponent } from './users.component';
export var usersRoutes = [
    { path: 'admin/users', component: UsersComponent, canActivate: [AuthGuard] }
];
//# sourceMappingURL=/home/samuel/repos/glaucoma-australia/glaucoma-risk-calc-web-frontend/src/src/app/users/users.routes.js.map