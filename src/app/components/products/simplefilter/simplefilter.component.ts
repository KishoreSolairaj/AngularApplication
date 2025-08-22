import { Component,EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-simplefilter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './simplefilter.component.html',
  styleUrl: './simplefilter.component.css'
})
export class SimplefilterComponent {
  selectedRadioButton:string = "All"
  @Output()
  ProductSelect:EventEmitter<string> = new EventEmitter<string>();
  search() {
    this.ProductSelect.emit(this.selectedRadioButton)  
  }

}
