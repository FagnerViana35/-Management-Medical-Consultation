import { ListaServiceService } from 'src/app/services/lista-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search-doctor',
  templateUrl: './search-doctor.component.html',
  styleUrls: ['./search-doctor.component.css']
})
export class SearchDoctorComponent {

  searchForm: FormGroup;
  post: any;

  constructor(private formBuilder: FormBuilder, private postService: ListaServiceService){

    this.searchForm = this.formBuilder.group({
      postId: ''
    });
  }

  // searchPostById() {
  //   const postName = this.searchForm.get('postId')?.value;
  //   this.postService.getPostById(postId).subscribe(post => {
  //     this.post = post;
  //   });
  // }

}
