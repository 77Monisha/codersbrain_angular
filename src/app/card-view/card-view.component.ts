import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Person {
  name: string;
  email: string;
  dob: string; // Here we are assuming dob is a string representing the birthdate
  country: string;
  avatar: string;
}

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrl: './card-view.component.css',
})
export class CardViewComponent {
  @Input() person: {
    name: string;
    email: string;
    dob: string;
    avatar: string;
    country: string;
  } = {
    name: '',
    email: '',
    dob: '',
    avatar: '',
    country: '',
  };
  @Input() index: number | undefined;
  @Output() onClick = new EventEmitter<Person>();
  @Output() onDelete = new EventEmitter<Person>();

  // To Calculate age of person
  calculateAge(dob: string): number {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  }

  handleUpdate(person: Person): void {
    this.onClick.emit(person);
  }

  handleDelete(person: Person): void {
    this.onDelete.emit(person);
  }
}
