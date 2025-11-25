import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: string;
  preferences: {
    theme: string;
    notifications: boolean;
    language: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserSubject = new BehaviorSubject<User>({
    id: '1',
    name: 'Usuario Demo',
    email: 'usuario@demo.com',
    role: 'Administrador',
    preferences: {
      theme: 'light',
      notifications: true,
      language: 'es'
    }
  });

  public currentUser$: Observable<User> = this.currentUserSubject.asObservable();

  constructor() {
    this.loadUser();
  }

  updateUser(user: Partial<User>): void {
    const currentUser = this.currentUserSubject.value;
    const updatedUser = { ...currentUser, ...user };
    this.currentUserSubject.next(updatedUser);
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
  }

  updatePreferences(preferences: Partial<User['preferences']>): void {
    const currentUser = this.currentUserSubject.value;
    const updatedUser = {
      ...currentUser,
      preferences: { ...currentUser.preferences, ...preferences }
    };
    this.currentUserSubject.next(updatedUser);
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
  }

  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

  private loadUser(): void {
    const saved = localStorage.getItem('currentUser');
    if (saved) {
      try {
        const user = JSON.parse(saved);
        this.currentUserSubject.next(user);
      } catch (e) {
        console.error('Error loading user:', e);
      }
    }
  }
}

