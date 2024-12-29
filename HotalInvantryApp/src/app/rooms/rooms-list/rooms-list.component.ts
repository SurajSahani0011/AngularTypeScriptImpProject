import { Component, EventEmitter, Input, OnInit, Output, OutputEmitterRef } from '@angular/core';
import { RoomList } from '../../roomsInterface';
import { CommonModule } from '@angular/common';
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';

@Component({
  selector: 'Hotal-rooms-list',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss'
})
export class RoomsListComponent implements OnInit {
// @Input is decorator to take data from perant
//@Output is decorator to send  data from child to perant
  @Input() rooms: RoomList[] = [];
  @Output() selectedRooms = new EventEmitter<RoomList>();
  constructor() {}

  ngOnInit(): void {

  }

  selectRoom(room: RoomList){
    this.selectedRooms.emit(room);
  }

}
