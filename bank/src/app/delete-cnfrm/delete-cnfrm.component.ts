import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-delete-cnfrm',
  templateUrl: './delete-cnfrm.component.html',
  styleUrls: ['./delete-cnfrm.component.css']
})
export class DeleteCnfrmComponent implements OnInit {

  @Input() item:String | undefined

  @Output() onCancel  = new EventEmitter

  @Output() onDelete =new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }

  cancel(){
    this .onCancel.emit()
  }

  delete(){
    this .onDelete.emit(this.item)
  }

}
