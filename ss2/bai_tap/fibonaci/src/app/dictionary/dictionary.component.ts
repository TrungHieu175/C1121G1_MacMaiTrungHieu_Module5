import {Component, OnInit} from '@angular/core';
import {DictionaryService} from "../services/dictionary.service";
import {Word} from "../model/word";

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  dictionarys: Word[] = []

  constructor(private dictionaryService: DictionaryService) {
  }

  ngOnInit(): void {
    this.dictionarys = this.dictionaryService.findAll();
  }

}
