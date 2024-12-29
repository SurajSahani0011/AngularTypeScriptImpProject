import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from '../roomsInterface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'Hotal-rooms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})
export class RoomsComponent implements OnInit {
  hotalName = 'Hilton Hotal';

  numberOfRoom = 10;

  hideRooms = false;

  rooms: Room = {
    totalroom: 20,
    avilableRooms: 10,
    bookedRooms: 5,

  };

  roomList : RoomList[] = [
    {
      roomNo:1,
    roomType: 'Dulex room',
    amenities: 'air conditiner, Free wifi, TV',
    price: 500,
    photos: 'https://th.bing.com/th/id/R.945e552b58c25f526ad089bc493d4516?rik=42BmhcZYWlYxGA&riu=http%3a%2f%2fcache.marriott.com%2fmarriottassets%2fmarriott%2fLASJW%2flasjw-guestroom-0111-hor-clsc.jpg%3finterpolation%3dprogressive-bilinear%26&ehk=VcnNojNooaxympMvDdeRVdz3JfYVtglQmJmdSktonXM%3d&risl=&pid=ImgRaw&r=0',
    checkinTime: new Date('11-Nov-2021'),
    checkOutTime: new Date('12-Nov-2021'),
  },
  {
    roomNo:2,
      roomType: 'Dulex room',
      amenities: 'air conditiner, Free wifi, TV',
      price: 1000,
      photos: 'https://images.pexels.com/photos/1470945/pexels-photo-1470945.jpeg?cs=srgb&dl=architecture-apartment-room-1470945.jpg&fm=jpg',
      checkinTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('12-Nov-2021'),
    
  },
  {
    roomNo:3,
    roomType: 'private room',
    amenities: 'air conditiner, Free wifi, TV',
    price: 1000,
    photos: 'https://images.pexels.com/photos/1470945/pexels-photo-1470945.jpeg?cs=srgb&dl=architecture-apartment-room-1470945.jpg&fm=jpg',
    checkinTime: new Date('11-Nov-2021'),
    checkOutTime: new Date('12-Nov-2021'),
  
}

];
  
  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
