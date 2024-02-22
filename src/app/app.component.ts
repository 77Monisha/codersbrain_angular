import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DummyListComponent } from './dummy-list/dummy-list.component';
import { CardViewComponent } from './card-view/card-view.component';

interface Person {
  id: number;
  name: string;
  email: string;
  dob: string;
  country: string;
  avatar: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  registerForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    country: ['', Validators.required],
    avatar: ['', Validators.required],
    dob: ['', Validators.required],
  });
  isSubmitted = false;

  constructor(private fb: FormBuilder) {}
  submittedData: any[] = [];
  selectedPerson: Person | null = null;

  // For deleting the Submitted Card
  handleDelete(person: Person, index: number): void {
    console.log('Person deleted:', person);
    this.submittedData.splice(index, 1);
    this.registerForm.reset();
  }

  // Submitting the Form
  onSubmit(): void {
    if (this.registerForm.valid) {
      if (this.selectedPerson) {
        // Checking if updating existing person
        const index = this.submittedData.findIndex(
          (p) => p.id === this.selectedPerson?.id
        );
        if (index !== -1) {
          this.submittedData[index] = this.registerForm.value;
        }
      } else {
        this.submittedData.push(this.registerForm.value); // Adding a new person
      }
      this.selectedPerson = null; // Clearing the selected person
      this.registerForm.reset(); // And Reseting form after successful submission
    }
    this.isSubmitted = true;
  }

  // Make edits to the Submitted Data
  handleUpdate(person: Person, index: number): void {
    alert('Scroll Above to form to make changes and click submit!');
    this.selectedPerson = person; // Store selected person for submission
    this.registerForm.patchValue(person); // Fill form with person's data
  }
}
