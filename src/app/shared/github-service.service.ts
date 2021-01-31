import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Repo } from '../main/repo.model';
@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {

  constructor(private http: HttpClient) { }

  getPublicRepos(){
    return this.http.get<any>("https://api.github.com/users/Darylvdberg/repos");
  }

  getPublicRepoInformation() {
    const repoSubject = new Subject<Repo[]>();
    this.getPublicRepos()
      .pipe(map(data => {
        let repoList: Repo[] = [];
        data.forEach((element: any) => {
          let repo = new Repo();
          repo.name = element.name;
          repo.description = element.description;
          repo.html_url = element.html_url;
          repoList.push(repo);
        });
        return repoList;
      }))
      .subscribe(response => {
      const repo = response as unknown as Repo[];
      repoSubject.next(repo);
      repoSubject.complete();
    });
    return repoSubject;
  }
}
