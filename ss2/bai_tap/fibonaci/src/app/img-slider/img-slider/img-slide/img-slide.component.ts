import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-slide',
  templateUrl: './img-slide.component.html',
  styleUrls: ['./img-slide.component.css']
})
export class ImgSlideComponent implements OnInit {
  name = 'Hieu Slider';
  imageObject = [{
    image: 'https://nntheblog.b-cdn.net/wp-content/uploads/2022/02/Akaza-demon-Slayer-3-scaled-930x620.jpg',
    thumbImage: 'https://nntheblog.b-cdn.net/wp-content/uploads/2022/02/Akaza-demon-Slayer-3-scaled-930x620.jpg',
    title: 'Akaza'
  }, {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPPvIw12IDGAfuC8NWgzepELTxpla7seRf6g&usqp=CAU',
    thumbImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPPvIw12IDGAfuC8NWgzepELTxpla7seRf6g&usqp=CAU',
    title: 'Rengoku'
  }, {
    image: 'https://techkalzen.com/wp-content/uploads/2020/03/Uzui-Tengen-anh-2.jpg',
    thumbImage: 'https://techkalzen.com/wp-content/uploads/2020/03/Uzui-Tengen-anh-2.jpg',
    title: 'Tengen'
  },{
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTir-qVqmPwzFNWwsM9R9gsdse-2z-JFICubw&usqp=CAU',
    thumbImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTir-qVqmPwzFNWwsM9R9gsdse-2z-JFICubw&usqp=CAU',
    title: 'Kimetsu no Yaiba'
  }, {
    image: 'https://images.alphacoders.com/122/1226564.jpg',
    thumbImage: 'https://images.alphacoders.com/122/1226564.jpg',
    title: 'Luffy Sun God'
  }, {
    image: 'https://wallpaperaccess.com/full/3078924.jpg',
    thumbImage: 'https://wallpaperaccess.com/full/3078924.jpg',
    title: 'Goku Ui'
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
