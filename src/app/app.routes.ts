import { Routes } from '@angular/router';
import { ForumBuilderComponent } from './forum-builder/forum-builder.component';
import { ForumAnswerComponent } from './forum-answer/forum-answer.component';

export const routes: Routes = [
    { path: 'forum/builder', component: ForumBuilderComponent ,},
    { path: 'forum/answer', component: ForumAnswerComponent },
    { path: '',   redirectTo: 'forum/builder', pathMatch: 'full' }
];
