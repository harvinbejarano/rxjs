import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './../todo.interface';

@Component({
	selector: 'app-client',
	templateUrl: './client.component.html',
	styleUrls: [ './client.component.scss' ],
})
export class ClientComponent implements OnInit {
	url = 'https://yesno.wtf/api';

	data: Observable<{ image }>;

	constructor(private http: HttpClient) {
		this.data = this.http.get<{ image }>(this.url);

		/*this.http.get(this.url).subscribe((data: Todo) => {
			this.todo = data;
			this.title = data.title;
    });*/
	}

	ngOnInit() {}
}
