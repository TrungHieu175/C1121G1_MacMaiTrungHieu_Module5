import {Injectable} from '@angular/core';
import {Word} from "../model/word";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  private words: Word[] = [
    {id: 1, word: 'Ohayogozaimasu', translate: 'Chào buổi sáng', detail: "おはようございます"},
    {id: 2, word: 'Konnichiwa', translate: 'Chào buổi chiều', detail: "こんにちは"},
    {id: 3, word: 'Konbanwa', translate: 'Chào buổi tối', detail: "こんばんは"},
    {id: 4, word: 'Oyasuminasai', translate: 'Chúc ngủ ngon', detail: "おやすみなさい"},
    {id: 5, word: 'Sayounara', translate: 'Chào tạm biệt', detail: "さようなら"},
    {id: 6, word: 'Arigatou gozaimasu', translate: 'Xin cảm ơn', detail: "ありがとう ございます"},
    {id: 7, word: 'Sumimasen', translate: 'Xin lỗi', detail: "すみません"},
    {id: 8, word: 'Onegaishimasu', translate: 'Xin vui lòng', detail: "おねがいします"},
    {id: 9, word: 'Shiken/Shukudai', translate: 'Kỳ thi/Bài tập về nhà', detail: "しけん/しゅくだい"},
    {id: 10, word: 'Shitsumon/Kotae/Rei', translate: 'Câu hỏi/Trả lời/Ví dụ', detail: "しつもん/こたえ/れい"},
  ];

  findById(id: number) {
    return this.words.find(item => item.id == id);
  }

  findAll() {
    return this.words;
  }

  constructor() {
  }
}
