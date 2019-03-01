import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entity-container',
  templateUrl: './entity-container.component.html',
  styleUrls: ['./entity-container.component.css']
})
export class EntityContainerComponent implements OnInit {
  screenId = 'generic';

  mappings = new Map<string, string>();


  constructor(private route: ActivatedRoute) {
    this.mappings.set('person', 'personView');
    this.mappings.set('org', 'orgView');

  }

  ngOnInit() {
    this.route.url.subscribe(
      url => {
        console.log('URL', url);


        const screenId = this.mappings.get(url[0].path);
        this.screenId = screenId;

      }
    );
  }

}
