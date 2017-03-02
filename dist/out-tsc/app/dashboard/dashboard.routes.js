import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from '../api/auth/auth-guard.service';
import { EmailComponent } from '../email/email.component';
import { UsersComponent } from '../users/users.component';
export var dashboardRoutes = [
    { path: 'admin/dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'admin/users', component: UsersComponent, canActivate: [AuthGuard] },
    { path: 'admin/email', component: EmailComponent, canActivate: [AuthGuard] }
];
//# sourceMappingURL=/home/samuel/repos/glaucoma_risk_calculator/glaucoma-risk-calc-web-frontend/src/app/dashboard/dashboard.routes.js.map