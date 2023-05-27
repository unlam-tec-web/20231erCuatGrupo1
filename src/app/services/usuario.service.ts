import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [];

  createUser(user: User): void {
    user.id = this.generateId();
    this.users.push(user);
  }

  getUsers(): User[] {
    return this.users;
  }

  updateUser(user: User): void {
    const index = this.users.findIndex((u) => u.id === user.id);
    if (index !== -1) {
      this.users[index] = user;
    }
  }

  deleteUser(id: number): void {
    this.users = this.users.filter((user) => user.id !== id);
  }

  getUserByEmail(email: string): User | null {
    const user = this.users.find((user) => user.email === email);
    return user ? user : null;
  }

  private generateId(): number {
    const ids = this.users.map((user) => user.id);
    return ids.length > 0 ? Math.max(...ids) + 1 : 1;
  }
}