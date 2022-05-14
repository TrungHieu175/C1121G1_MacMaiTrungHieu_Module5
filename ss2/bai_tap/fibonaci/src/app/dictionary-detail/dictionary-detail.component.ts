import { Component, OnInit } from '@angular/core';
import {DictionaryService} from "../services/dictionary.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Word} from "../model/word";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  dictionary: Word;
  constructor(private dictionaryService: DictionaryService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
        let id = parseInt(paramMap.get('id'));
        if (id != null){
          this.dictionary = this.dictionaryService.findById(id);
        }
    });
  }

}
