import { Injectable, ɵɵNgOnChangesFeature } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Assignment } from '../assignments/assignment.model';
import { User } from '../user/user.model';
import { LoggingService } from './logging.service';
import { dataPourPeuplerBD } from './data';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class UserService {
    user: User[] = [{
        id: 1,
        nom: 'Buffa',
        prenom: 'Jean',
        email: 'BUffa@gmail.com',
        password: '1234',
    }];
    constructor(private loggingService: LoggingService, private http: HttpClient) { }
    uri = "http://localhost:8010/api/users";

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.uri);
    }

    getUserByEmail(email: string): Observable<User | undefined> {
        return this.http.get<User>(`${this.uri}/email/${email}`)
    }

    getUser(id: number): Observable<User | undefined> {
        return this.http.get<User>(`${this.uri}/${id}`)
    }

    addUser(user: User): Observable<any> {
        this.loggingService.log(user.nom, "ajouté");
        return this.http.post(this.uri, user);
    }

    deleteUser(user: User): Observable<any> {
        return this.http.delete(`${this.uri}/${user.id}`);
    }

    updateUser(user: User): Observable<any> {
        this.loggingService.log(user.nom, "modifié");
        return this.http.put(`${this.uri}/${user.id}`, user);
    }
}