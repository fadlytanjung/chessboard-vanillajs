const files = ['A','B','C','D', 'E','F','G','H'];
class Board {
  constructor({ selector, size}){
    this.size = size;
    this.cells = [];
    this.element = document.querySelector(selector);
    this.element.classList.add('board');
    this.init();
  }
  init(){
    if(this.size){
      this.element.style.width = this.size;
      this.element.style.height = this.size;
    }else{
      const size = '90vmin';
      this.element.style.width = size;
      this.element.style.height = size;
    }
    this.cells = Array.from({ length:64 }, (_, index)=>{
      const rank = 8 - Math.floor(index/8); //row (side to side)
      const fileNum = index % 8;
      const file = files[fileNum];// column
      const isBlack = !(rank%2 === fileNum%2)
      const cell = new Square({
        isBlack,
        rank,
        file,
      });
      this.element.appendChild(cell.element);
      return cell;
    });
  }
}

class Square {
  constructor({ rank, file, isBlack }){
    this.rank = rank;
    this.file = file;
    this.element = document.createElement('div');
    this.element.classList.add('square');
    if (isBlack){
      this.element.classList.add('black');
    }
    this.element.setAttribute('data-rank',rank);
    this.element.setAttribute('data-file', file);
  }
}

const parent = document.querySelector('.parent');
const board = document.createElement('div');
board.classList.add('board');
parent.appendChild(board);
new Board({ selector: '.board' });