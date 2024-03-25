import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'feedback-and-chat',
        loadComponent: () => import('./feedback-and-chat/feedback-and-chat.component').then(c => c.FeedbackAndChatComponent),
    }
];
