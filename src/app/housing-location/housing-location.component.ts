import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HousingLocation } from '../housinglocation';

@Component({
	selector: 'app-housing-location',
	standalone: true,
	imports: [RouterModule],
	template: `
		<section>
			<img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{ housingLocation.name }}">
			<h2 class="listing-heading">{{ housingLocation.name }}</h2>
			<p class="listing-location">{{ housingLocation.city }}, {{ housingLocation.state }}</p>
			<a [routerLink] = "['/details', housingLocation.id]">Learn More</a>
		</section>
	`,
	styleUrl: './housing-location.component.css'
	})
	export class HousingLocationComponent {
		@Input() housingLocation!: HousingLocation;
	}
