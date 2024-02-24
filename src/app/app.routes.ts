import { Routes } from '@angular/router';
import { ForumBuilderComponent } from './components/forum-builder/forum-builder.component';
import { ForumAnswerComponent } from './components/forum-answer/forum-answer.component';
import { authGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {
        path: 'forum/builder',
        canActivate: [authGuard],
        component: ForumBuilderComponent
    },
    {
        path: 'forum/answer',
        canActivate: [authGuard],
        component: ForumAnswerComponent
    },
    {
        path: 'login',
        component: LoginComponent
        
    },

    { path: '**',   redirectTo: 'login', pathMatch: 'full' }
];
