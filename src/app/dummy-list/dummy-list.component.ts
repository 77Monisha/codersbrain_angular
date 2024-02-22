import { Component, OnInit } from '@angular/core';

interface DummyPerson {
  name: string;
  email: string;
  dob: number;
  country: string;
  avatar: string;
}

@Component({
  selector: 'app-dummy-list',
  templateUrl: './dummy-list.component.html',
  styleUrl: './dummy-list.component.css',
})
export class DummyListComponent implements OnInit {
  // Some Dummy json for the user reference
  dummyCards: DummyPerson[] = [
    {
      name: 'Vamika',
      email: 'user1@email.com',
      dob: 23,
      country: 'India',
      avatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Aryan',
      email: 'user2@email.com',
      dob: 13,
      country: 'India',
      avatar:
        'https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Ciri',
      email: 'user3@email.com',
      dob: 33,
      country: 'India',
      avatar:
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
