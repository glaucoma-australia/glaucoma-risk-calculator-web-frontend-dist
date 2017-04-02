//import { AuthGuard } from './api/auth/auth-guard.service';
// NOTE: `canActivate` can only be done manually on all the child routes [true for ng @ 2.4.0]
export var rootRoutes = [
    { path: '', loadChildren: 'app/home/home.module#HomeModule' },
    { path: 'login-signup', loadChildren: 'app/login-signup/login-signup.module#LoginSignupModule' },
    { path: 'admin', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' }
    //{path: 'admin/email', loadChildren: 'app/email/email.module#EmailModule'}
];
//# sourceMappingURL=/home/samuel/repos/glaucoma-australia/glaucoma-risk-calc-web-frontend/src/src/app/app.routes.js.map