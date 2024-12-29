export interface Room {
    totalroom:number;
    avilableRooms:number;
    bookedRooms:number;
}

export interface RoomList {
    roomNo: number;
    roomType: string;
    amenities: string;
    price: number;
    photos: string;
    checkinTime: Date;
    checkOutTime: Date;
}