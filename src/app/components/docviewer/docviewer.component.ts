import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { MymarkdownService } from 'src/app/services/mymarkdown.service';

@Component({
  selector: 'app-docviewer',
  templateUrl: './docviewer.component.html',
  styleUrls: ['./docviewer.component.css']
})
export class DocviewerComponent implements OnInit {

  specifiedPath!: string;
  markdown!: string;

  constructor(private route: ActivatedRoute, private myMarkdownService: MymarkdownService, private router : Router) {
    this.route.params.subscribe(path => this.specifiedPath = path.specifiedPath);
  }

  ngOnInit(): void {
    this.route.url.subscribe((url : UrlSegment[]) => {
      //console.log(url[0].path);
      if (url[0].path !== "doc") {
        this.router.navigate(['pagenotfound']);
      }
      else {
        let myPath: string = "";
        //console.log(url);
        url.forEach(segment => {
          myPath += segment + "/";
        })
        myPath = myPath.substring(0, myPath.length - 1);
        //console.log(myPath);
        this.myMarkdownService.getMarkdown(myPath).subscribe((data : string) => {
          this.markdown = data;
        })
      }
    });
  }

}
