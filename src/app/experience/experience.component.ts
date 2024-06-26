import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  lstExperience = [{
    image: 'assets/image/upwork.webp',
    heading: 'UPWORK',
    name: 'Freelance',
    description: 'A Top Rated Freelancer at Upwork, an American freelancing platform and the largest network of independent professionals to get things done, from quick turnarounds to big transformations.',
    url: 'https://www.upwork.com/freelancers/~015609714aba33348b?viewMode=1',
  },
  {
    image: 'assets/image/binaryclock.png',
    heading: 'Binary Clock',
    name: 'Frontand Developer',
    description: 'A logical binary clock is a timekeeping device that displays the current time using a binary system to represent hours, minutes, and seconds. Unlike traditional analog or digital clocks, which typically use decimal numbering systems, a binary clock expresses time in binary code, where each digit is represented by a combination of on and off states of lights or digits.',
    url: 'https://binaryclock.vercel.app/'
  },
  {
    image: 'assets/image/softwebex.png',
    heading: 'SoftWebex',
    name: 'Frontand Developer',
    description: 'SoftWebEx is a comprehensive technical website offering insights, tutorials, and resources on various topics ranging from web development, software engineering, cybersecurity, to cloud computing, aiding professionals and enthusiasts alike.',
    url: 'https://softwebex.vercel.app/'
  },
  {
    image: 'assets/image/sampledata.png',
    heading: 'Sample Data',
    name: 'Frontand Developer',
    description: 'SoftWebEx is a comprehensive technical website offering insights, tutorials, and resources on various topics ranging from web development, software engineering, cybersecurity, to cloud computing, aiding professionals and enthusiasts alike.',
    url: 'https://sampledata.vercel.app/sample-videos'
  },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
